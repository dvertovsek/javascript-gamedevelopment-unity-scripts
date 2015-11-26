#pragma strict

private var lockImg : UnityEngine.UI.RawImage;

static var levelLocked: boolean = true;

var winSound : AudioClip;

var enemy : GameObject;
var enemyCount: int = 0;
function decrementEnemyCount()
{
	enemyCount--;
}
function Start () {
	if(Application.loadedLevelName == "menu")
	{
		lockImg = GameObject.Find("lockImg").GetComponent(UnityEngine.UI.RawImage);
		lockImg.enabled = levelLocked == true ? true : false;
	}
	else
	{
		StartCoroutine("instantiateEnemies");
	}
	
}
function win()
{
	AudioSource.PlayClipAtPoint(winSound, Vector3.zero);
	levelLocked = false;
	Application.LoadLevel("menu");
}

function instantiateEnemies()
{
	while(true)
	{
		if(enemyCount <= 4)
		{
			Instantiate(enemy,Vector3(-2.5,3,270),Quaternion.identity);
			Instantiate(enemy,Vector3(-10.5,3,270),Quaternion.identity);
			enemyCount += 2;
		}
		yield WaitForSeconds(3.0);
	}
}

function startLevel1()
{
	Application.LoadLevel("lvl1");
}
function startLevel2()
{
	if(!levelLocked)
	{
		Application.LoadLevel("lvl2");
	}
}
function quitApplication()
{
	Application.Quit();
}