import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = [
  
  ]

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  linkToPost() {
    const link = this.element.dataset.link
    window.location.href = link;    
  }
}