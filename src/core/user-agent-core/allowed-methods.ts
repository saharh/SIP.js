import { C } from "../messages";

/**
 * FIXME: TODO: Should be configurable/variable.
 */
export const AllowedMethods = [
  C.ACK,
  C.BYE,
  C.CANCEL,
  C.INFO,
  C.INVITE,
  C.MESSAGE,
  C.NOTIFY,
  C.OPTIONS,
  C.PRACK, // FIXME: Only if 100rel Supported
  C.REFER,
  C.REGISTER,
  C.SUBSCRIBE
];
