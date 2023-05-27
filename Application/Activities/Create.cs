using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Create
    {
        public class Command: IRequest
        {
            public Activity Activity { get; set; }

        }
        public class Hanlder : IRequestHandler<Command>
        {
            private readonly APIContext _context;

            public Hanlder(APIContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);
                await _context.SaveChangesAsync();
            }

        }
    }
}
