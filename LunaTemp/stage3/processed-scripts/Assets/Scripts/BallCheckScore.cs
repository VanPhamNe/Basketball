using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallCheckScore : MonoBehaviour
{
    private bool passedTop;

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("dunkTop"))
        {
            Debug.Log("top");
            AudioManager.instance.PlaySFX(0);
            passedTop = true;
        }
        else if (other.CompareTag("dunkBot") && passedTop)
        {
            // N?u b�ng qua trigger tr�n sau khi ?� qua trigger d??i th� t�nh ?i?m
            GameManager.Instance.AddScore(1);
            Debug.Log("Ghi diem");

            // Reset l?i tr?ng th�i ?? ??m l?n ti?p theo
            passedTop = false;
        }
    }
}
