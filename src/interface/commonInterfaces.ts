export interface EnvConfig {
  env: string;
  port: number;
  profile: string;
  bucket: string;
  secretManagerKey: string;
  region: string;
  sentryDsn: string;
  mongoUri: string;
}
export interface ISecretManager {
  mongoUri: string;
  bucket: string;
  region: string;
  jwtSecret: string;
  encryptionSecret: string;
  sendgridApiKey: string;
  senderEmail: string;
  sentryDsn: string;
  openAIKey: string;
}
