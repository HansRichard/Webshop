using Application.Products.CreateProducts;
using Application.Products.DeleteProducts;
using Application.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webshop.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateProduct([FromForm] CreateProductCommand command)
        {
            if (command == null)
            {
                return BadRequest("The command field is required.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (command.Image != null)
            {
                var imageSize = command.Image.Length;
                Console.WriteLine($"Received image with size: {imageSize} bytes");
            }

            await _productService.CreateProductAsync(command);
            return Ok(new { message = "Product created successfully" });
        }



        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            var command = new DeleteProductCommand { ProductID = id };
            await _productService.DeleteProductAsync(command);
            return Ok("Product deleted successfully.");
        }

        [HttpGet("get")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }
    }
}
