<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  
    public function register(RegisterRequest $request){
        $data=$request->validated();
        $user= User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>Hash::make($data['password'])
        ]);
        $token=$user->createToken('test')->plainTextToken;
        return response(compact('user','token'));
    }
    public function login(LoginRequest $request){
        $credentials=$request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message'=>'email or password incorrect'
            ]);
        }
        $user=User::where('email',Auth::user()->email)->first();
        $token=$user->createToken('test')->plainTextToken;
        return response(compact('user','token'));

    }
    public function logout(Request $request){
        $user=$request->user();
        $user->currentAccessToken()->delete();
        return response([''],204);
    }
}
