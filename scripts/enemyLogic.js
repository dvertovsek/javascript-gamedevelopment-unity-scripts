#pragma strict

private var speed: float;

private var player: GameObject;

private var gameManager: GameObject;

function Start () {
	player = GameObject.Find("player");
	gameManager = GameObject.Find("GameManager");
	speed = Random.Range(1,3);
}

function Update () {
	transform.LookAt(player.transform.position);
	if(player.transform.position.z > transform.position.z || transform.position.z < -62)
	{
		Destroy(gameObject);
		gameManager.GetComponent(GameManager).decrementEnemyCount();
	}
	transform.position.z -= 0.4 * speed;
}

function OnTriggerEnter(other : Collider)
{
	if(other.name == "player")
	{
		player.GetComponent(playerLogic).killPlayer();
	}
}