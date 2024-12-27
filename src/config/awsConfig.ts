import * as AWS from 'aws-sdk';
import {
  AWSError,
  config,
  SecretsManager,
  SharedIniFileCredentials,
} from 'aws-sdk';

import envConfig from './envConfig';

import {  ISecretManager } from '../interface/commonInterfaces';

const CONFIG = envConfig();

const Bucket = CONFIG.bucket;

console.log(CONFIG.env);
if (CONFIG.env === 'local') {
  const CREDENTIALS = new SharedIniFileCredentials({ profile: CONFIG.profile });
  config.credentials = CREDENTIALS;
}

let secretKeys: ISecretManager;

export const getSecretKeys = async (
  isForceSync = false,
): Promise<ISecretManager> =>
  new Promise((resolve, reject) => {
    if (!secretKeys || isForceSync) {
      const client = new SecretsManager({
        region: CONFIG.region,
      });

      client.getSecretValue(
        {
          SecretId: CONFIG.secretManagerKey,
        },
        (err: AWSError, data: SecretsManager.Types.GetSecretValueResponse) => {
          if (err) {
            reject(err);
          } else {
            secretKeys = JSON.parse(data.SecretString as string);
            resolve(secretKeys);
          }
        },
      );
    } else {
      resolve(secretKeys);
    }
  });

export default {
  s3: new AWS.S3({ params: { Bucket } }),
};
