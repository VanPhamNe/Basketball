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
            // N?u bóng qua trigger trên sau khi ?ã qua trigger d??i thì tính ?i?m
            GameManager.Instance.AddScore(1);
            Debug.Log("Ghi diem");

            // Reset l?i tr?ng thái ?? ??m l?n ti?p theo
            passedTop = false;
        }
    }
}
