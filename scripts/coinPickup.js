#pragma strict

var coinPickupSound: AudioClip;
var ptsTotalSetter: int;

static var ptsCount: int = 0;
static var ptsTotal: int;

private var pts: UnityEngine.UI.Text;

function Start () {
	ptsTotal = ptsTotalSetter;
	
	pts = GameObject.Find("txtPoints").GetComponent(UI.Text);
}

function OnTriggerEnter(other : Collider)
{
	if(other.name == "player")
	{
		updatePts();
		AudioSource.PlayClipAtPoint(coinPickupSound,transform.position);
		Destroy(gameObject);
	}
}

function updatePts()
{
    ptsCount++; 
	pts.text = ptsCount+"/"+ptsTotal;
}
