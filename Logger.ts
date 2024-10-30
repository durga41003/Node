export class LoggerUtil {
    static info(message: string) {
      console.log(`[INFO]: ${message}`);
    }
  
    static error(message: string) {
      console.error(`[ERROR]: ${message}`);
    }
    static isValidString(input: string) {
      return input && input !== 'undefined' && input !== 'null';
  }
  
  static checkMandatoryStringValue(input: string, key: string) {
      if (!this.isValidString(input)) {
        console.error(`Bad Request ${key} should not be empty string`);
      }
      return input;
  }

  static generateDefaultResponse(status: string, message: string) {
      return {
          status, 
          message
      };
  }
}
  