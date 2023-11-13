import nodemailer from 'nodemailer';

export class Mail {
    #transporter = null;

    constructor() {
        this.#transporter = this.#getTransporter();
    }

    #getTransporter() {
        return nodemailer.createTransport({
            host: "smtp.example.com",
            port: 587,
            secure: false,
            service: 'outlook',
            auth: {
                user: "lesurvivaliste@outlook.com",
                pass: "T3qqU7HDT",
            },
        });
    }

    async send(receive, message) {
        try {
            const info = await this.#transporter.sendMail({
                from: 'lesurvivaliste@outlook.com',
                to: 'demese5244@rdluxe.com',
                subject: 'Message from Node js',
                text: 'This message was sent from Node js server.',
                html:
                    `This <i>message</i> was sent from <strong>Node.JS</strong> server.`,
            });
            return info.messageId;
        } catch (e) {
            return e;
        }
    }
}