import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent, ISession, EventService } from '../shared/index'

@Component({
  templateUrl: '/app/events/event-details/event-details.component.html',  
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height:100px; }
    a {cursor:pointer}
  `]
})
export class EventDetailsComponent implements OnInit {
  event:IEvent
  addMode: boolean
  filterBy: string = 'all';

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession) {
    const nextId =  Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
}