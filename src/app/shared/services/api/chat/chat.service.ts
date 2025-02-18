import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from '../../../../pages/messenger/chat/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private readonly http: HttpClient) {}

  getChatHistoryByRoomId$(roomId: number): Observable<Message[]> {
    return of([
      {
        id: 1,
        uuid: 2,
        roomId: 1,
        message: 'Hello, how are you?',
        userName: 'John',
        creationDate: '2025-01-25T09:00:00',
        editDate: null,
        likes: [],
      },
      {
        id: 2,
        uuid: 2,
        roomId: 1,
        message: 'The weather is amazing today!',
        userName: 'Anna',
        creationDate: '2025-01-25T09:05:00',
        editDate: null,
        likes: [],
      },
      {
        id: 3,
        uuid: 2,
        roomId: 1,
        message: 'Has anyone seen my laptop?',
        userName: 'Max',
        creationDate: '2025-01-25T09:10:00',
        editDate: '2025-01-25T09:15:00',
        likes: [],
      },
      {
        id: 4,
        uuid: 2,
        roomId: 2,
        message: 'Hi everyone! I just joined this room.',
        userName: 'Olivia',
        creationDate: '2025-01-25T09:20:00',
        editDate: null,
        likes: [],
      },
      {
        id: 5,
        uuid: 2,
        roomId: 2,
        message: 'This project is getting more and more interesting!',
        userName: 'Alex',
        creationDate: '2025-01-25T09:30:00',
        editDate: null,
        likes: [],
      },
      {
        id: 6,
        uuid: 2,
        roomId: 3,
        message: 'I need more details about this task to proceed.',
        userName: 'Sophia',
        creationDate: '2025-01-25T09:40:00',
        editDate: null,
        likes: [],
      },
      {
        id: 7,
        uuid: 2,
        roomId: 3,
        message: 'Does anyone have ideas on how to solve this issue?',
        userName: 'Dmitry',
        creationDate: '2025-01-25T09:45:00',
        editDate: null,
        likes: [],
      },
      {
        id: 8,
        uuid: 2,
        roomId: 4,
        message: 'Just testing how notifications work in this chat.',
        userName: 'Kate',
        creationDate: '2025-01-25T09:50:00',
        editDate: '2025-01-25T09:55:00',
        likes: [],
      },
      {
        id: 9,
        uuid: 1,
        roomId: 4,
        message:
          'This is a long message describing important details of the project. We are discussing various implementation options, analyzing their pros and cons, and trying to find the most optimal solution.',
        userName: 'Alexander',
        creationDate: '2025-01-25T10:00:00',
        editDate: null,
        likes: [],
      },
      {
        id: 10,
        uuid: 2,
        roomId: 1,
        message: 'Who can attend the meeting tomorrow?',
        userName: 'Mary',
        creationDate: '2025-01-25T10:10:00',
        editDate: null,
        likes: [],
      },
      {
        id: 11,
        uuid: 2,
        roomId: 2,
        message: 'Good morning, everyone! Have a great day!',
        userName: 'John',
        creationDate: '2025-01-25T10:15:00',
        editDate: null,
        likes: [],
      },
      {
        id: 12,
        uuid: 1,
        roomId: 2,
        message: 'We have a few questions to discuss at the next meeting.',
        userName: 'Anna',
        creationDate: '2025-01-25T10:20:00',
        editDate: null,
        likes: [],
      },
      {
        id: 13,
        uuid: 2,
        roomId: 3,
        message: "I have some updates on the project. Let's have a call later.",
        userName: 'Max',
        creationDate: '2025-01-25T10:25:00',
        editDate: null,
        likes: [],
      },
      {
        id: 14,
        uuid: 2,
        roomId: 3,
        message:
          'A very long message detailing the situation. We are analyzing requirements, summarizing previous meetings, and discussing a plan to achieve all the set goals. This message contains a lot of important details.',
        userName: 'Olivia',
        creationDate: '2025-01-25T10:30:00',
        editDate: '2025-01-25T10:35:00',
        likes: [],
      },
      {
        id: 15,
        uuid: 1,
        roomId: 4,
        message: "Don't forget to check the latest changes in the documentation.",
        userName: 'Alex',
        creationDate: '2025-01-25T10:40:00',
        editDate: null,
        likes: [],
      },
      {
        id: 16,
        uuid: 2,
        roomId: 4,
        message: 'Does anyone know where to find the archived data?',
        userName: 'Sophia',
        creationDate: '2025-01-25T10:45:00',
        editDate: null,
        likes: [],
      },
      {
        id: 17,
        uuid: 2,
        roomId: 5,
        message: "Let's gather for a discussion at 3 PM.",
        userName: 'Dmitry',
        creationDate: '2025-01-25T10:50:00',
        editDate: null,
        likes: [],
      },
      {
        id: 18,
        uuid: 2,
        roomId: 5,
        message:
          'A large message describing the process, including all stages of development, testing, and deployment. We are also addressing potential issues and looking for solutions in advance.',
        userName: 'Kate',
        creationDate: '2025-01-25T11:00:00',
        editDate: null,
        likes: [],
      },
      {
        id: 19,
        uuid: 2,
        roomId: 1,
        message: 'Any ideas for the new project?',
        userName: 'Alexander',
        creationDate: '2025-01-25T11:10:00',
        editDate: null,
        likes: [],
      },
      {
        id: 20,
        uuid: 1,
        roomId: 1,
        message: 'This is an example of a short message.',
        userName: 'Mary',
        creationDate: '2025-01-25T11:15:00',
        editDate: null,
        likes: [],
      },
    ]);
  }
}
