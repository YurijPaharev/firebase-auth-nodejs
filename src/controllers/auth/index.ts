import { Request, Response } from "express";
import { fireAuth, adminFireAuth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, confirmPasswordReset, signOut as fireSignOut } from "firebase/auth";

export const signUp = async (req: Request, res: Response) => {
    try {
        const {email, password, firstName, lastName} = req.body;
        const userCredentials = await createUserWithEmailAndPassword(fireAuth, email, password)
        await updateProfile(userCredentials.user, {displayName: `${firstName} ${lastName}`})
        const idToken = await fireAuth.currentUser.getIdToken()
        res.status(200).send({
            idToken,
            refreshToken: userCredentials.user.refreshToken
        })
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({errorCode, errorMessage});
    }
}

export const signIn = async (req: Request, res: Response) => {
    try {
        const {email, password} = req.body;
        const userCredentials = await signInWithEmailAndPassword(fireAuth, email, password);
        const idToken = await fireAuth.currentUser.getIdToken()
        res.status(200).json({
            idToken,
            refreshToken: userCredentials.user.refreshToken
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({errorCode, errorMessage});
    }
}

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const {email} = req.body;
        const response = await sendPasswordResetEmail(fireAuth, email, {url: 'http://localhost', handleCodeInApp: true});
        res.status(200).json({
            response
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({errorCode, errorMessage});
    }
}

export const confirmResetPassword = async (req: Request, res: Response) => {
    try {
        const {password, code} = req.body;
        const response = await confirmPasswordReset(fireAuth, code, password);
        res.status(200).json({
            response
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({errorCode, errorMessage});
    }
}

export const signOut = async (req: Request, res: Response) => {
    try {
        const response = await fireSignOut(fireAuth)
        res.status(200).json({
            response
        });
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.status(400).json({errorCode, errorMessage});
    }
}
