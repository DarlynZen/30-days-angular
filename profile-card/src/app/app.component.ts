import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'profile-card';
  name: string = "Jenifer Darlyn Asmad Chia";
  age: number = 14;
  description: string = "Soy una persona apasionada por la tecnología y el desarrollo de software. Me encanta aprender nuevas habilidades y enfrentar desafíos que me permitan crecer profesionalmente. En mi tiempo libre, disfruto de la lectura, el cine y pasar tiempo con mis amigos y familiares.";
}
