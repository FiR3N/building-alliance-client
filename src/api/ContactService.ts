import { $api } from ".";
import { AxiosResponse } from "axios";

class ContactService {
  static async sendMessageFromUser(
    name: string,
    surname: string,
    email: string,
    text: string,
    subject: string,
    companyName: string,
    telephone: string
  ): Promise<AxiosResponse> {
    return await $api.post("/contact", {
      name,
      surname,
      email,
      text,
      subject,
      companyName,
      telephone,
    });
  }
}

export default ContactService;
