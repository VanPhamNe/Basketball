if ( TRACE ) { TRACE( JSON.parse( '["AudioManager#Awake","AudioManager#PlaySFX","AudioManager#StopSFX","BallCheckScore#OnTriggerEnter","BallController#init","BallController#Start","BallController#Update","BallController#TryPickBall","BallController#DragBall","BallController#ReleaseBall","BallSelectRotate#init","BallSelectRotate#Update","BallSelectRotate#UpdateCurrentIndex","BallSelectRotate#OnConfirmSelection","GameManager#init","GameManager#Awake","GameManager#AddScore","GameManager#UpdateScoreUI"]' ) ); }
/**
 * @version 1.0.9358.20910
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AudioManager start.*/
    Bridge.define("AudioManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            sfx: null
        },
        methods: {
            /*AudioManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "AudioManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(AudioManager.instance, null)) {
                    AudioManager.instance = this;

                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*AudioManager.Awake end.*/

            /*AudioManager.PlaySFX start.*/
            PlaySFX: function (sfxPlay, randomPitch) {
if ( TRACE ) { TRACE( "AudioManager#PlaySFX", this ); }

                if (randomPitch === void 0) { randomPitch = true; }
                if (sfxPlay >= this.sfx.length) {
                    return;
                }

                if (randomPitch) {
                    this.sfx[sfxPlay].pitch = UnityEngine.Random.Range$1(0.8, 1.2);
                }
                this.sfx[sfxPlay].Play();
            },
            /*AudioManager.PlaySFX end.*/

            /*AudioManager.StopSFX start.*/
            StopSFX: function (sfxStop) {
if ( TRACE ) { TRACE( "AudioManager#StopSFX", this ); }

                if (sfxStop >= this.sfx.length) {
                    return;
                }
                this.sfx[sfxStop].Stop();
            },
            /*AudioManager.StopSFX end.*/


        }
    });
    /*AudioManager end.*/

    /*BallCheckScore start.*/
    Bridge.define("BallCheckScore", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            passedTop: false
        },
        methods: {
            /*BallCheckScore.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "BallCheckScore#OnTriggerEnter", this ); }

                if (other.CompareTag("dunkTop")) {
                    UnityEngine.Debug.Log$1("top");
                    AudioManager.instance.PlaySFX(0);
                    this.passedTop = true;
                } else if (other.CompareTag("dunkBot") && this.passedTop) {
                    GameManager.Instance.AddScore(1);
                    UnityEngine.Debug.Log$1("Ghi diem");
                    this.passedTop = false;
                }
            },
            /*BallCheckScore.OnTriggerEnter end.*/


        }
    });
    /*BallCheckScore end.*/

    /*BallController start.*/
    Bridge.define("BallController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballParent: null,
            ballLayer: null,
            forceMultiplier: 0,
            selectedBallRb: null,
            selectedBallTrans: null,
            startDragPos: null,
            isDragging: false,
            mainCamera: null,
            touchTrailPrefab: null,
            currentTouchTrail: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallController#init", this ); }

                this.ballLayer = new UnityEngine.LayerMask();
                this.startDragPos = new UnityEngine.Vector3();
                this.forceMultiplier = 5.0;
                this.isDragging = false;
            }
        },
        methods: {
            /*BallController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "BallController#Start", this ); }

                this.mainCamera = UnityEngine.Camera.main;
            },
            /*BallController.Start end.*/

            /*BallController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallController#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.TryPickBall();
                }

                if (this.isDragging) {
                    this.DragBall();
                }

                if (UnityEngine.Input.GetMouseButtonUp(0) && this.isDragging) {
                    this.ReleaseBall();
                }
            },
            /*BallController.Update end.*/

            /*BallController.TryPickBall start.*/
            TryPickBall: function () {
if ( TRACE ) { TRACE( "BallController#TryPickBall", this ); }

                AudioManager.instance.PlaySFX(1);
                var ray = this.mainCamera.ScreenPointToRay(UnityEngine.Input.mousePosition);
                var hit = { v : new UnityEngine.RaycastHit() };

                if (UnityEngine.Physics.Raycast$1(ray, hit, 100.0, UnityEngine.LayerMask.op_Implicit(this.ballLayer.$clone()))) {
                    this.selectedBallTrans = hit.v.transform;
                    this.selectedBallRb = this.selectedBallTrans.GetComponent(UnityEngine.Rigidbody);
                    this.isDragging = true;

                    this.selectedBallRb.isKinematic = true;
                    this.startDragPos = this.selectedBallTrans.position.$clone();
                    if (UnityEngine.GameObject.op_Inequality(this.touchTrailPrefab, null)) {
                        this.currentTouchTrail = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.touchTrailPrefab, this.selectedBallTrans.position, pc.Quat.IDENTITY.clone());
                    }
                }
            },
            /*BallController.TryPickBall end.*/

            /*BallController.DragBall start.*/
            DragBall: function () {
if ( TRACE ) { TRACE( "BallController#DragBall", this ); }

                var mousePos = UnityEngine.Input.mousePosition.$clone();
                mousePos.z = this.mainCamera.WorldToScreenPoint(this.selectedBallTrans.position).z;
                var worldPos = this.mainCamera.ScreenToWorldPoint(mousePos);
                this.selectedBallTrans.position = worldPos.$clone();
                if (UnityEngine.GameObject.op_Inequality(this.currentTouchTrail, null)) {
                    this.currentTouchTrail.transform.position = worldPos.$clone();
                }
            },
            /*BallController.DragBall end.*/

            /*BallController.ReleaseBall start.*/
            ReleaseBall: function () {
if ( TRACE ) { TRACE( "BallController#ReleaseBall", this ); }

                AudioManager.instance.PlaySFX(2);
                this.isDragging = false;
                if (UnityEngine.GameObject.op_Inequality(this.currentTouchTrail, null)) {
                    UnityEngine.MonoBehaviour.Destroy(this.currentTouchTrail);
                    this.currentTouchTrail = null;
                }
                var endPos = this.selectedBallTrans.position.$clone();
                var throwDir = endPos.$clone().sub( this.startDragPos );

                if (throwDir.length() < 0.1) {
                    return;
                }


                var horizontalDir = new pc.Vec3( 0, 0, 1 );
                var horizontalMag = throwDir.length();

                var forceHorizontal = horizontalDir.$clone().clone().scale( horizontalMag ).clone().scale( this.forceMultiplier );


                var verticalForce = UnityEngine.Mathf.Max(throwDir.y, 0.0) * this.forceMultiplier * 2.0;
                var forceVertical = pc.Vec3.UP.clone().clone().scale( verticalForce );

                var totalForce = forceHorizontal.$clone().add( forceVertical );

                this.selectedBallRb.isKinematic = false;
                this.selectedBallRb.velocity = pc.Vec3.ZERO.clone();
                this.selectedBallRb.AddForce$1(totalForce, UnityEngine.ForceMode.Impulse);

                this.selectedBallRb = null;
                this.selectedBallTrans = null;
            },
            /*BallController.ReleaseBall end.*/


        }
    });
    /*BallController end.*/

    /*BallSelectRotate start.*/
    Bridge.define("BallSelectRotate", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballSelectParent: null,
            ballParent: null,
            currentIndex: 0,
            rotationSpeed: 0,
            lastMousePos: null,
            panelSelectBall: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "BallSelectRotate#init", this ); }

                this.lastMousePos = new UnityEngine.Vector3();
                this.currentIndex = 0;
                this.rotationSpeed = 100.0;
            }
        },
        methods: {
            /*BallSelectRotate.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "BallSelectRotate#Update", this ); }

                if (!this.panelSelectBall.activeInHierarchy) {
                    return;
                }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.lastMousePos = UnityEngine.Input.mousePosition.$clone();
                }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    var delta = UnityEngine.Input.mousePosition.$clone().sub( this.lastMousePos );
                    this.transform.Rotate$1(pc.Vec3.UP.clone(), -delta.x * this.rotationSpeed * UnityEngine.Time.deltaTime);
                    this.lastMousePos = UnityEngine.Input.mousePosition.$clone();

                    this.UpdateCurrentIndex();
                }
            },
            /*BallSelectRotate.Update end.*/

            /*BallSelectRotate.UpdateCurrentIndex start.*/
            UpdateCurrentIndex: function () {
if ( TRACE ) { TRACE( "BallSelectRotate#UpdateCurrentIndex", this ); }

                var yRotation = this.transform.eulerAngles.y;
                var ballCount = this.ballSelectParent.childCount;
                var segmentAngle = 360.0 / ballCount;

                var index = Math.round(yRotation / segmentAngle) % ballCount;
                if (index < 0) {
                    index = (index + ballCount) | 0;
                }

                this.currentIndex = index;
            },
            /*BallSelectRotate.UpdateCurrentIndex end.*/

            /*BallSelectRotate.OnConfirmSelection start.*/
            OnConfirmSelection: function () {
if ( TRACE ) { TRACE( "BallSelectRotate#OnConfirmSelection", this ); }

                var $t, $t1;
                if (UnityEngine.Component.op_Equality(this.ballSelectParent, null) || UnityEngine.Component.op_Equality(this.ballParent, null)) {
                    return;
                }

                var selectedBall = this.ballSelectParent.GetChild(this.currentIndex);

                var selectedRenderers = selectedBall.GetComponentsInChildren(UnityEngine.Renderer);
                if (selectedRenderers.length === 0) {
                    UnityEngine.Debug.LogWarning$1("Selected ball has no Renderer");
                    return;
                }

                var selectedMat = selectedRenderers[0].sharedMaterial;

                $t = Bridge.getEnumerator(this.ballParent);
                try {
                    while ($t.moveNext()) {
                        var ball = Bridge.cast($t.Current, UnityEngine.Transform);
                        var renderers = ball.GetComponentsInChildren(UnityEngine.Renderer);
                        $t1 = Bridge.getEnumerator(renderers);
                        try {
                            while ($t1.moveNext()) {
                                var rend = $t1.Current;
                                rend.material = selectedMat;
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*BallSelectRotate.OnConfirmSelection end.*/


        }
    });
    /*BallSelectRotate end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            scoreText: null,
            score: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.score = 0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.Instance, null)) {
                    GameManager.Instance = this;
                    UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.AddScore start.*/
            AddScore: function (amount) {
if ( TRACE ) { TRACE( "GameManager#AddScore", this ); }

                this.score = (this.score + amount) | 0;
                UnityEngine.Debug.Log$1("Score: " + this.score);
                this.UpdateScoreUI();
            },
            /*GameManager.AddScore end.*/

            /*GameManager.UpdateScoreUI start.*/
            UpdateScoreUI: function () {
if ( TRACE ) { TRACE( "GameManager#UpdateScoreUI", this ); }

                this.scoreText.text = Bridge.toString(this.score);
            },
            /*GameManager.UpdateScoreUI end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","TMPro"];

    /*AudioManager start.*/
    $m("AudioManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"PlaySFX","t":8,"pi":[{"n":"sfxPlay","pt":$n[0].Int32,"ps":0},{"n":"randomPitch","dv":true,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"PlaySFX","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"StopSFX","t":8,"pi":[{"n":"sfxStop","pt":$n[0].Int32,"ps":0}],"sn":"StopSFX","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"instance","is":true,"t":4,"rt":AudioManager,"sn":"instance"},{"at":[new UnityEngine.HeaderAttribute("Audio Sources"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"sfx","t":4,"rt":System.Array.type(UnityEngine.AudioSource),"sn":"sfx"}]}; }, $n);
    /*AudioManager end.*/

    /*BallCheckScore start.*/
    $m("BallCheckScore", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"passedTop","t":4,"rt":$n[0].Boolean,"sn":"passedTop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*BallCheckScore end.*/

    /*BallController start.*/
    $m("BallController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DragBall","t":8,"sn":"DragBall","rt":$n[0].Void},{"a":1,"n":"ReleaseBall","t":8,"sn":"ReleaseBall","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TryPickBall","t":8,"sn":"TryPickBall","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ballLayer","t":4,"rt":$n[1].LayerMask,"sn":"ballLayer"},{"a":2,"n":"ballParent","t":4,"rt":$n[1].Transform,"sn":"ballParent"},{"a":1,"n":"currentTouchTrail","t":4,"rt":$n[1].GameObject,"sn":"currentTouchTrail"},{"a":2,"n":"forceMultiplier","t":4,"rt":$n[0].Single,"sn":"forceMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mainCamera","t":4,"rt":$n[1].Camera,"sn":"mainCamera"},{"a":1,"n":"selectedBallRb","t":4,"rt":$n[1].Rigidbody,"sn":"selectedBallRb"},{"a":1,"n":"selectedBallTrans","t":4,"rt":$n[1].Transform,"sn":"selectedBallTrans"},{"a":1,"n":"startDragPos","t":4,"rt":$n[1].Vector3,"sn":"startDragPos"},{"a":2,"n":"touchTrailPrefab","t":4,"rt":$n[1].GameObject,"sn":"touchTrailPrefab"}]}; }, $n);
    /*BallController end.*/

    /*BallSelectRotate start.*/
    $m("BallSelectRotate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnConfirmSelection","t":8,"sn":"OnConfirmSelection","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateCurrentIndex","t":8,"sn":"UpdateCurrentIndex","rt":$n[0].Void},{"a":2,"n":"ballParent","t":4,"rt":$n[1].Transform,"sn":"ballParent"},{"a":2,"n":"ballSelectParent","t":4,"rt":$n[1].Transform,"sn":"ballSelectParent"},{"a":1,"n":"currentIndex","t":4,"rt":$n[0].Int32,"sn":"currentIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"lastMousePos","t":4,"rt":$n[1].Vector3,"sn":"lastMousePos"},{"a":2,"n":"panelSelectBall","t":4,"rt":$n[1].GameObject,"sn":"panelSelectBall"},{"a":2,"n":"rotationSpeed","t":4,"rt":$n[0].Single,"sn":"rotationSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*BallSelectRotate end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddScore","t":8,"pi":[{"n":"amount","pt":$n[0].Int32,"ps":0}],"sn":"AddScore","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"UpdateScoreUI","t":8,"sn":"UpdateScoreUI","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":4,"rt":GameManager,"sn":"Instance"},{"a":2,"n":"score","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"scoreText","t":4,"rt":$n[2].TextMeshProUGUI,"sn":"scoreText"}]}; }, $n);
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
