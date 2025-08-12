using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
public class GameManager : MonoBehaviour
{
    public static GameManager Instance;  // Singleton ?? d? g?i t? script khác
    public TextMeshProUGUI scoreText;
    public int score = 0;



    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            DontDestroyOnLoad(gameObject);  // Gi? GameManager khi load scene m?i
        }
        else
        {
            Destroy(gameObject);
        }
    }
    
    public void AddScore(int amount)
    {
        score += amount;
        Debug.Log("Score: " + score);
        UpdateScoreUI();
    }
    void UpdateScoreUI()
    {
        scoreText.text = score.ToString();
    }
}
