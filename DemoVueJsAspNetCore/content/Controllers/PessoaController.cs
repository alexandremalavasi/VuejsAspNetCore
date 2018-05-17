using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Vue2Spa.Models;

namespace Vue2Spa.Controllers
{
    [Route("api/[controller]/[action]")]
    public class PessoaController : Controller
    {
        public IEnumerable<Pessoa> lista()
        {
            List<Pessoa> lista_pessoa = new List<Pessoa>();

            for(int i = 0; i < 1000;i++)
            {
                Pessoa pessoa = new Pessoa();
                pessoa.Id = i;
                pessoa.Nome = "Pessoa " + i.ToString();

                lista_pessoa.Add(pessoa);
            }

            return lista_pessoa;
        }
    }
}
