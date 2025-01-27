using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Interfaces;
using Application.Products.CreateProducts;
using Application.Products.DeleteProducts;
using Domain.Entities;

namespace Application.Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task CreateProductAsync(CreateProductCommand command)
        {
            byte[] imageBytes = null;

            if (!string.IsNullOrEmpty(command.Image))
            {
                try
                {
                    imageBytes = Convert.FromBase64String(command.Image.Split(',')[1]);
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
            }

            var product = new Product
            {
                ProductID = Guid.NewGuid(),
                Name = command.Name,
                Description = command.Description,
                Category = command.Category,
                Price = command.Price,
                Image = imageBytes
            };

            await _productRepository.AddAsync(product);
        }


        public async Task DeleteProductAsync(DeleteProductCommand command)
        {
            var product = await _productRepository.GetByIdAsync(command.ProductID);
            if (product != null)
            {
                await _productRepository.DeleteAsync(product);
            }
        }

        public async Task<List<Product>> GetAllProductsAsync()
        {
            return await _productRepository.GetAllAsync();
        }
    }
}
