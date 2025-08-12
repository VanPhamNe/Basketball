using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    [SerializeField] private GameObject[] uiElement;
    public void SwitchUI(GameObject uiEnable)
    {
        foreach (GameObject ui in uiElement) {
            ui.SetActive(false);    
        }
        uiEnable.SetActive(true);
    }
}
