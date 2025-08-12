using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallSelectRotate : MonoBehaviour
{
    public Transform ballSelectParent;  // ch?a 5 qu? bóng m?u ?? ch?n (xoay)
    public Transform ballParent;        // ch?a 5 qu? bóng con c?n ??i material

    private int currentIndex = 0;

    public float rotationSpeed = 100f;
    private Vector3 lastMousePos;

    public GameObject panelSelectBall;

    void Update()
    {
        if (!panelSelectBall.activeInHierarchy)
            return;

        if (Input.GetMouseButtonDown(0))
            lastMousePos = Input.mousePosition;

        if (Input.GetMouseButton(0))
        {
            Vector3 delta = Input.mousePosition - lastMousePos;
            transform.Rotate(Vector3.up, -delta.x * rotationSpeed * Time.deltaTime);
            lastMousePos = Input.mousePosition;

            UpdateCurrentIndex();
        }
    }

    void UpdateCurrentIndex()
    {
        float yRotation = transform.eulerAngles.y;
        int ballCount = ballSelectParent.childCount;
        float segmentAngle = 360f / ballCount;

        int index = Mathf.RoundToInt(yRotation / segmentAngle) % ballCount;
        if (index < 0) index += ballCount;

        currentIndex = index;
    }

    // G?i hàm này khi nh?n nút OK
    public void OnConfirmSelection()
    {
        if (ballSelectParent == null || ballParent == null)
            return;

        Transform selectedBall = ballSelectParent.GetChild(currentIndex);

        Renderer[] selectedRenderers = selectedBall.GetComponentsInChildren<Renderer>();
        if (selectedRenderers.Length == 0)
        {
            Debug.LogWarning("Selected ball has no Renderer");
            return;
        }

        Material selectedMat = selectedRenderers[0].sharedMaterial;

        foreach (Transform ball in ballParent)
        {
            Renderer[] renderers = ball.GetComponentsInChildren<Renderer>();
            foreach (var rend in renderers)
            {
                rend.material = selectedMat;
            }
        }
    }
}
