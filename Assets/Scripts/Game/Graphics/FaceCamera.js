﻿#pragma strict

function Start () {

}

function Update () {
	transform.rotation = 
		Quaternion.LookRotation(
			-Camera.main.transform.forward
		);
}