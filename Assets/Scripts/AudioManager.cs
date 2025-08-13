using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager instance;
    [Header("Audio Sources")]
    [SerializeField] private AudioSource[] sfx;

    private void Awake()
    {
        if (instance == null)
        {
            instance = this;

        }
        else
        {
            Destroy(gameObject);
        }
    }
    public void PlaySFX(int sfxPlay, bool randomPitch = true)
    {
        if (sfxPlay >= sfx.Length)
            return;

        if (randomPitch)
        {
            sfx[sfxPlay].pitch = Random.Range(0.8f, 1.2f);
        }
        sfx[sfxPlay].Play();
    }
    public void StopSFX(int sfxStop)
    {
        if (sfxStop >= sfx.Length)
            return;
        sfx[sfxStop].Stop();
    }

  
}
