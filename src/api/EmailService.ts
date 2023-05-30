import { $api } from ".";
import { AxiosResponse } from "axios";

class EmailService {
  static async sendMessageFromUser(
    name: string,
    surname: string,
    email: string,
    text: string,
    subject: string,
    companyName: string,
    telephone: string
  ): Promise<AxiosResponse> {
    return await $api.post("/email/contact", {
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
    return await $api.post("/email/vacancy", {
      name,
      surname,
      patronymic,
      email,
      telephone,
      text,
      vacancyName,
    });
  }
  static async sendOrder(
    name: string,
    phone: string,
    address: string,
    email: string,
    count: string,
    price: number,
    mixtureType: string,
    mixture: string,
    text: string
  ): Promise<AxiosResponse> {
    return await $api.post("/email/order", {
      name,
      phone,
      address,
      email,
      count,
      price,
      mixtureType,
      mixture,
      text,
    });
  }
}

export default EmailService;
