#pragma strict

var killSound : AudioClip;

var killParticles : ParticleSystem;

function Update () {
	if (Input.touchCount == 1) {
		transform.Translate(Input.acceleration.x,0,0);
	}
	else
	{
		transform.Translate(Input.acceleration.x,0,0.6);
	}
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
	transform.position = Vector3(-3.8,1,-102);
}