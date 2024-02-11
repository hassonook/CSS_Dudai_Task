using CSS_Dudai_Task.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace CSS_Dudai_Task.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        private static readonly List<Item> items = new List<Item>
        {
            new Item { Id = 1, Name = "Item 1" },
            new Item { Id = 2, Name = "Item 2" },
            new Item { Id = 3, Name = "Item 3" },
            // Add more items as needed
        };

        [HttpGet]
        public ActionResult Get()
        {
            return Ok(items);
        }
    }
}
