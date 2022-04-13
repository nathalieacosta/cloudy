import passport from "passport";
import LocalStrategy from "passport-local";
import { findUserByUsername, validatePassword } from "./dbConnect";