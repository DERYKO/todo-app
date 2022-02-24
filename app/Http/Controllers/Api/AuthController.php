<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(
                [
                    'errors' => $validator->errors()
                ], Response::HTTP_UNPROCESSABLE_ENTITY
            );
        } else {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('token')->accessToken;
                    return response()->json(
                        [
                            'token' => $token,
                            'user' => $user,
                        ], Response::HTTP_OK
                    );
                } else {
                    return response()->json(
                        [
                            'message' => 'Credentials Provided are Incorrect'
                        ], Response::HTTP_NOT_FOUND
                    );
                }
            } else {
                return response()->json(
                    [
                        'message' => 'Credentials Provided are Incorrect'
                    ], Response::HTTP_NOT_FOUND
                );
            }
        }
    }

    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => ['required'],
            'email' => ['required', 'unique:users'],
            'password' => ['required', 'confirmed', 'min:6']
        ]);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        return response()->json(['message' => 'User created successfully!', 'data' => $user]);
    }

    public function signOut(Request $request)
    {
        $user = Auth::user()->token();
        $user->revoke();
        return response()->json(['message' => 'Logout success'],401);

    }
}
