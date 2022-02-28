import Env from "../components/environments/AppEnvironment.enum";
import { IEnvConfig } from "../components/environments/IConfiguration";

export const devConfiguration: IEnvConfig = {
    ENVIRONMENT: Env.DEV,
    ANALYTICS: "https://firebase-dev/env.json"
}