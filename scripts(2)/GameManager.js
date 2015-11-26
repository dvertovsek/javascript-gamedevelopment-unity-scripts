#pragma strict

var lockImg : UnityEngine.UI.RawImage;

static var levelLocked: boolean = true;

var winSound : AudioClip;

function Start () {
	if(Application.loadedLevelName == "menu")
	{
		lockImg = GameObject.Find("lockImg").GetComponent(UnityEngine.UI.RawImage);
		lockImg.enabled = levelLocked == true ? true : false;
	}
}
function win()
{
	AudioSource.PlayClipAtPoint(winSound, Vector3.zero);
	levelLocked = false;
	Application.LoadLevel("menu");
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