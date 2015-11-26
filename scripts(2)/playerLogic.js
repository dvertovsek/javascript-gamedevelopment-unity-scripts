#pragma strict

var speedLimitX : float = 0.25;
var speedLimitY : float = 0.25;

var killSound : AudioClip;

var killParticles : ParticleSystem;

function Update () {
	transform.Translate(Input.acceleration.x*speedLimitX,0,-Input.acceleration.z*speedLimitY);
	if(transform.position.y < -35)
	{
		killPlayer();
	}
}

function killPlayer()
{
	killParticles.transform.position = transform.position;
	killParticles.Play();
	AudioSource.PlayClipAtPoint(killSound, new Vector3(0,0,0));
	transform.position = Vector3(0,1,-6);
}