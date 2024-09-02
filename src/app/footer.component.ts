import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [],
  template: `
    <a
      style="color:blueviolet;font-size: small;"
      href="https://www.linkedin.com/in/mahfuz-morshed-2934a949/"
      target="_blank"
    >
    ©Mahfuz Morshed
    </a>
  `,
  styles: [
    `
      :host {
        padding: 10px 0px;
        text-align: center;
        font-size: 16px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
