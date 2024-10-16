import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('hamMenu') hamMenuIcon!: ElementRef<HTMLElement>;
  @ViewChild('navBar') navBar!: ElementRef<HTMLUListElement>;
  @ViewChild('scrollTop') scrollTopBtn!: ElementRef<HTMLButtonElement>;
  emailInput!: HTMLInputElement;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.emailInput = this.elementRef.nativeElement.querySelector('#email');
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // SideMenu Toggle
    this.hamMenuIcon.nativeElement.addEventListener('click', () => {
      this.navBar.nativeElement.classList.toggle('active');
      this.hamMenuIcon.nativeElement.classList.toggle('fa-times');
    });

    this.navBar.nativeElement.querySelectorAll('li').forEach((navLink) => {
      navLink.addEventListener('click', () => {
        this.navBar.nativeElement.classList.remove('active');
        this.hamMenuIcon.nativeElement.classList.toggle('fa-times');
      });
    });

    // Scroll and Scroll Top Button
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    this.scrollTopBtn.nativeElement.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });

    // Email subscribe
    document.getElementById('get-started')?.addEventListener('click', () => {
      this.handleEmailSubscription();
    });
  }

  private handleScroll(): void {
    const pos = document.documentElement.scrollTop;

    // Sticky Header
    const header = this.elementRef.nativeElement.querySelector('header');
    if (pos > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    // Scroll Top Button
    if (pos > 300) {
      this.scrollTopBtn.nativeElement.style.display = 'grid';
    } else {
      this.scrollTopBtn.nativeElement.style.display = 'none';
    }
  }

  private handleEmailSubscription(): void {
    const email = this.emailInput.value;

    if (email) {
      alert(`Thank you for joining the StudyBuddy Community, ${email}!`);
      this.emailInput.value = ''; // Clear the input box
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
