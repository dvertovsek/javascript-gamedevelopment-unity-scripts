#pragma strict

function OnTriggerEnter(other : Collider)
{
	if(other.name == "player")
	{
		GameObject.Find("GameManager").GetComponent(GameManager).win();
	}
}