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
  static async sendVacancyFromUser(
    name: string,
    surname: string,
    patronymic: string,
    email: string,
    telephone: string,
    text: string,
    vacancyName: string
  ): Promise<AxiosResponse> {
    return await $api.post("/contact/vacancy", {
      name,
      surname,
      patronymic,
      email,
      telephone,
      text,
      vacancyName,
    });
  }
}

export default ContactService;
