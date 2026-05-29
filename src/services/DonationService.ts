import { useRouter } from 'vue-router';

export class DonationService { 
  private readonly donationURL: string = import.meta.env.VITE_DONATION_URL;
  private readonly router = useRouter();

  public async donate(gateway: string, currency_id: string, donation_amount: Number, installments: number, email: string) {
    try {
      const response = await fetch(this.donationURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ gateway, currency_id, donation_amount, installments, email })
      });
      const data = await response.json();
      window.location.replace(data.sandbox_init_point);
    } catch (error) {
      alert('Oops! Something went wrong. Error: ' + error);
      this.router.push('/')
    }
  }
}