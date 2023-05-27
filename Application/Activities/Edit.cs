using AutoMapper;
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
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }  
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly APIContext _context;
            private readonly IMapper _mapper;

            public Handler(APIContext context, IMapper mapper)
            {
                _context = context;
                this._mapper = mapper;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                //activity.Title = request.Activity.Title ?? activity.Title;
                //activity.Venue = request.Activity.Venue ?? activity.Venue;
                //activity.City = request.Activity.City ?? activity.City; 
                //activity.Category = request.Activity.Category ?? activity.Category;
                //activity.Description = request.Activity.Description ?? activity.Description;
                _mapper.Map(request.Activity, activity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
