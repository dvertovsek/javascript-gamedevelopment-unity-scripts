#pragma strict

var waypoints: Transform[];
var speed: float;
var curWayPoint: int;
var doPatrol: boolean = true;
var target: Vector3;
var moveDirection: Vector3;
var velocity: Vector3;

private var player: GameObject;

function Start () {
	player = GameObject.Find("player");
}

function Update () {
	if(curWayPoint < waypoints.length)
	{
		target = waypoints[curWayPoint].position;
		moveDirection = target - transform.position;
		velocity = rigidbody.velocity;
		
		if(moveDirection.magnitude < 1)
		{
			curWayPoint++;
		}
		else
		{
			velocity = moveDirection.normalized * speed;
		}
	}
	else
	{
		if(doPatrol)
		{
			curWayPoint = 0;
		}
		else
		{
			velocity = Vector3.zero;
		}
	}
	rigidbody.velocity = velocity;
	transform.LookAt(target);
}

function OnTriggerEnter(other : Collider)
{
	if(other.name == "player")
	{
		player.GetComponent(playerLogic).killPlayer();
	}
}