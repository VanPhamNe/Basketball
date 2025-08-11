using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallController : MonoBehaviour
{
    public Transform ballParent;    // Parent ch?a c�c qu? b�ng
    public LayerMask ballLayer;     // Layer mask ?? l?c b�ng khi raycast
    public float forceMultiplier = 5f;

    private Rigidbody selectedBallRb;
    private Transform selectedBallTrans;
    private Vector3 startDragPos;
    private bool isDragging = false;
    private Camera mainCamera;
    public GameObject touchTrailPrefab;  // G�n prefab Touch Trail s?n c� v�o inspector
    private GameObject currentTouchTrail;


    void Start()
    {
        mainCamera = Camera.main;
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            TryPickBall();
        }

        if (isDragging)
        {
            DragBall();
        }

        if (Input.GetMouseButtonUp(0) && isDragging)
        {
            ReleaseBall();
        }
    }

    void TryPickBall()
    {
        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, 100f, ballLayer))
        {
            // B?t ??u k�o qu? b�ng ???c ch?n
            selectedBallTrans = hit.transform;
            selectedBallRb = selectedBallTrans.GetComponent<Rigidbody>();
            isDragging = true;

            selectedBallRb.isKinematic = true; // T?t v?t l� ?? k�o
            startDragPos = selectedBallTrans.position;
            if (touchTrailPrefab != null)
            {
                currentTouchTrail = Instantiate(touchTrailPrefab, selectedBallTrans.position, Quaternion.identity);
            }
        }
    }

    void DragBall()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = mainCamera.WorldToScreenPoint(selectedBallTrans.position).z;
        Vector3 worldPos = mainCamera.ScreenToWorldPoint(mousePos);
        selectedBallTrans.position = worldPos;
        if (currentTouchTrail != null)
        {
            currentTouchTrail.transform.position = worldPos;
        }
    }

    void ReleaseBall()
    {
        isDragging = false;
        if (currentTouchTrail != null)
        {
            Destroy(currentTouchTrail);
            currentTouchTrail = null;
        }
        Vector3 endPos = selectedBallTrans.position;
        Vector3 throwDir = endPos - startDragPos;

        if (throwDir.magnitude < 0.1f)
            return;

        // Thay v� d�ng throwDir ngang, ta l?y h??ng c? ??nh v? ph�a tr??c (Z d??ng)
        Vector3 horizontalDir = Vector3.forward;
        float horizontalMag = throwDir.magnitude; // d�ng ?? d�i k�o l�m l?c ngang

        Vector3 forceHorizontal = horizontalDir * horizontalMag * forceMultiplier;

        // L?c n�ng nh? tr??c
        float verticalForce = Mathf.Max(throwDir.y, 0f) * forceMultiplier * 2f;
        Vector3 forceVertical = Vector3.up * verticalForce;

        Vector3 totalForce = forceHorizontal + forceVertical;

        selectedBallRb.isKinematic = false;
        selectedBallRb.velocity = Vector3.zero;
        selectedBallRb.AddForce(totalForce, ForceMode.Impulse);

        selectedBallRb = null;
        selectedBallTrans = null;
    }
}