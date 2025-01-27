using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Products.DeleteProducts
{
    public class DeleteProductCommand
    {
        public Guid ProductID { get; set; }
    }
}
