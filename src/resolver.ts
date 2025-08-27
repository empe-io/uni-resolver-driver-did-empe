import {loadSupportedDidMethodsFromEnv} from "./config";
import {EmpeDIDResolver} from "@empe/empe-did-resolver";


const supportedMethods = loadSupportedDidMethodsFromEnv();

export const didResolver = new EmpeDIDResolver(supportedMethods)