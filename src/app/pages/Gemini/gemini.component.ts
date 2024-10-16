import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gemini',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gemini.component.html',
  styleUrls: ['./gemini.component.scss'],
})
export class GeminiComponent {
  userInput: string = ''; // User input message
  messages: { user?: string; bot?: string }[] = []; // Array to store chat messages (both user and bot)

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (this.userInput.trim() !== '') {
      // Add user message to messages array
      this.messages.push({ user: this.userInput });

      // Send the user's prompt to the backend and receive bot's response
      this.http.post<{ result: string }>('http://localhost:5800/ai/gemini', { prompt: this.userInput })
        .subscribe((res) => {
          // Add bot response to messages array
          this.messages.push({ bot: res.result });
          this.userInput = ''; // Clear input field after sending the message
        });
    }
  }
}
