var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointSpring' )
  var i535 = data
  i534.spring = i535[0]
  i534.damper = i535[1]
  i534.targetPosition = i535[2]
  return i534
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointMotor' )
  var i537 = data
  i536.m_TargetVelocity = i537[0]
  i536.m_Force = i537[1]
  i536.m_FreeSpin = i537[2]
  return i536
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointLimits' )
  var i539 = data
  i538.m_Min = i539[0]
  i538.m_Max = i539[1]
  i538.m_Bounciness = i539[2]
  i538.m_BounceMinVelocity = i539[3]
  i538.m_ContactDistance = i539[4]
  i538.minBounce = i539[5]
  i538.maxBounce = i539[6]
  return i538
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointDrive' )
  var i541 = data
  i540.m_PositionSpring = i541[0]
  i540.m_PositionDamper = i541[1]
  i540.m_MaximumForce = i541[2]
  i540.m_UseAcceleration = i541[3]
  return i540
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i543 = data
  i542.m_Spring = i543[0]
  i542.m_Damper = i543[1]
  return i542
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i545 = data
  i544.m_Limit = i545[0]
  i544.m_Bounciness = i545[1]
  i544.m_ContactDistance = i545[2]
  return i544
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i547 = data
  i546.m_ExtremumSlip = i547[0]
  i546.m_ExtremumValue = i547[1]
  i546.m_AsymptoteSlip = i547[2]
  i546.m_AsymptoteValue = i547[3]
  i546.m_Stiffness = i547[4]
  return i546
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i549 = data
  i548.m_LowerAngle = i549[0]
  i548.m_UpperAngle = i549[1]
  return i548
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i551 = data
  i550.m_MotorSpeed = i551[0]
  i550.m_MaximumMotorTorque = i551[1]
  return i550
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i553 = data
  i552.m_DampingRatio = i553[0]
  i552.m_Frequency = i553[1]
  i552.m_Angle = i553[2]
  return i552
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i555 = data
  i554.m_LowerTranslation = i555[0]
  i554.m_UpperTranslation = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i556 = root || new pc.UnityMaterial()
  var i557 = data
  i556.name = i557[0]
  request.r(i557[1], i557[2], 0, i556, 'shader')
  i556.renderQueue = i557[3]
  i556.enableInstancing = !!i557[4]
  var i559 = i557[5]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i559[i + 0]) );
  }
  i556.floatParameters = i558
  var i561 = i557[6]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i561[i + 0]) );
  }
  i556.colorParameters = i560
  var i563 = i557[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i563[i + 0]) );
  }
  i556.vectorParameters = i562
  var i565 = i557[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i565[i + 0]) );
  }
  i556.textureParameters = i564
  var i567 = i557[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i567[i + 0]) );
  }
  i556.materialFlags = i566
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = new pc.Color(i575[1], i575[2], i575[3], i575[4])
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = new pc.Vec4( i579[1], i579[2], i579[3], i579[4] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i583 = data
  i582.name = i583[0]
  request.r(i583[1], i583[2], 0, i582, 'value')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i587 = data
  i586.name = i587[0]
  i586.enabled = !!i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i589 = data
  i588.name = i589[0]
  i588.halfPrecision = !!i589[1]
  i588.useUInt32IndexFormat = !!i589[2]
  i588.vertexCount = i589[3]
  i588.aabb = i589[4]
  var i591 = i589[5]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( !!i591[i + 0] );
  }
  i588.streams = i590
  i588.vertices = i589[6]
  var i593 = i589[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i593[i + 0]) );
  }
  i588.subMeshes = i592
  var i595 = i589[8]
  var i594 = []
  for(var i = 0; i < i595.length; i += 16) {
    i594.push( new pc.Mat4().setData(i595[i + 0], i595[i + 1], i595[i + 2], i595[i + 3],  i595[i + 4], i595[i + 5], i595[i + 6], i595[i + 7],  i595[i + 8], i595[i + 9], i595[i + 10], i595[i + 11],  i595[i + 12], i595[i + 13], i595[i + 14], i595[i + 15]) );
  }
  i588.bindposes = i594
  var i597 = i589[9]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i597[i + 0]) );
  }
  i588.blendShapes = i596
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i603 = data
  i602.triangles = i603[0]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i609 = data
  i608.name = i609[0]
  var i611 = i609[1]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i611[i + 0]) );
  }
  i608.frames = i610
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i613 = data
  i612.name = i613[0]
  i612.width = i613[1]
  i612.height = i613[2]
  i612.mipmapCount = i613[3]
  i612.anisoLevel = i613[4]
  i612.filterMode = i613[5]
  i612.hdr = !!i613[6]
  i612.format = i613[7]
  i612.wrapMode = i613[8]
  i612.alphaIsTransparency = !!i613[9]
  i612.alphaSource = i613[10]
  i612.graphicsFormat = i613[11]
  i612.sRGBTexture = !!i613[12]
  i612.desiredColorSpace = i613[13]
  i612.wrapU = i613[14]
  i612.wrapV = i613[15]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i615 = data
  i614.position = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.scale = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.rotation = new pc.Quat(i615[6], i615[7], i615[8], i615[9])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i617 = data
  var i619 = i617[0]
  var i618 = []
  for(var i = 0; i < i619.length; i += 3) {
    i618.push( new pc.Vec3( i619[i + 0], i619[i + 1], i619[i + 2] ) );
  }
  i616.positions = i618
  i616.positionCount = i617[1]
  i616.time = i617[2]
  i616.startWidth = i617[3]
  i616.endWidth = i617[4]
  i616.widthMultiplier = i617[5]
  i616.autodestruct = !!i617[6]
  i616.emitting = !!i617[7]
  i616.numCornerVertices = i617[8]
  i616.numCapVertices = i617[9]
  i616.minVertexDistance = i617[10]
  i616.colorGradient = i617[11] ? new pc.ColorGradient(i617[11][0], i617[11][1], i617[11][2]) : null
  i616.startColor = new pc.Color(i617[12], i617[13], i617[14], i617[15])
  i616.endColor = new pc.Color(i617[16], i617[17], i617[18], i617[19])
  i616.generateLightingData = !!i617[20]
  i616.textureMode = i617[21]
  i616.alignment = i617[22]
  i616.widthCurve = new pc.AnimationCurve( { keys_flow: i617[23] } )
  i616.enabled = !!i617[24]
  request.r(i617[25], i617[26], 0, i616, 'sharedMaterial')
  var i621 = i617[27]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i616.sharedMaterials = i620
  i616.receiveShadows = !!i617[28]
  i616.shadowCastingMode = i617[29]
  i616.sortingLayerID = i617[30]
  i616.sortingOrder = i617[31]
  i616.lightmapIndex = i617[32]
  i616.lightmapSceneIndex = i617[33]
  i616.lightmapScaleOffset = new pc.Vec4( i617[34], i617[35], i617[36], i617[37] )
  i616.lightProbeUsage = i617[38]
  i616.reflectionProbeUsage = i617[39]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i627 = data
  i626.name = i627[0]
  i626.tagId = i627[1]
  i626.enabled = !!i627[2]
  i626.isStatic = !!i627[3]
  i626.layer = i627[4]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'sharedMesh')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'additionalVertexStreams')
  i630.enabled = !!i631[2]
  request.r(i631[3], i631[4], 0, i630, 'sharedMaterial')
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.sharedMaterials = i632
  i630.receiveShadows = !!i631[6]
  i630.shadowCastingMode = i631[7]
  i630.sortingLayerID = i631[8]
  i630.sortingOrder = i631[9]
  i630.lightmapIndex = i631[10]
  i630.lightmapSceneIndex = i631[11]
  i630.lightmapScaleOffset = new pc.Vec4( i631[12], i631[13], i631[14], i631[15] )
  i630.lightProbeUsage = i631[16]
  i630.reflectionProbeUsage = i631[17]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i635 = data
  i634.name = i635[0]
  i634.width = i635[1]
  i634.height = i635[2]
  i634.anisoLevel = i635[3]
  i634.filterMode = i635[4]
  i634.hdr = !!i635[5]
  i634.colorFormat = i635[6]
  i634.depthStencilFormat = i635[7]
  i634.renderTextureFormat = i635[8]
  i634.depth = i635[9]
  i634.wrapU = i635[10]
  i634.wrapV = i635[11]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i637 = data
  i636.name = i637[0]
  i636.atlasId = i637[1]
  i636.mipmapCount = i637[2]
  i636.hdr = !!i637[3]
  i636.size = i637[4]
  i636.anisoLevel = i637[5]
  i636.filterMode = i637[6]
  var i639 = i637[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 4) {
    i638.push( UnityEngine.Rect.MinMaxRect(i639[i + 0], i639[i + 1], i639[i + 2], i639[i + 3]) );
  }
  i636.rects = i638
  i636.wrapU = i637[8]
  i636.wrapV = i637[9]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i643 = data
  i642.name = i643[0]
  i642.index = i643[1]
  i642.startup = !!i643[2]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i645 = data
  i644.center = new pc.Vec3( i645[0], i645[1], i645[2] )
  i644.size = new pc.Vec3( i645[3], i645[4], i645[5] )
  i644.enabled = !!i645[6]
  i644.isTrigger = !!i645[7]
  request.r(i645[8], i645[9], 0, i644, 'material')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i647 = data
  i646.type = i647[0]
  i646.color = new pc.Color(i647[1], i647[2], i647[3], i647[4])
  i646.cullingMask = i647[5]
  i646.intensity = i647[6]
  i646.range = i647[7]
  i646.spotAngle = i647[8]
  i646.shadows = i647[9]
  i646.shadowNormalBias = i647[10]
  i646.shadowBias = i647[11]
  i646.shadowStrength = i647[12]
  i646.shadowResolution = i647[13]
  i646.lightmapBakeType = i647[14]
  i646.renderMode = i647[15]
  request.r(i647[16], i647[17], 0, i646, 'cookie')
  i646.cookieSize = i647[18]
  i646.enabled = !!i647[19]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i649 = data
  i648.aspect = i649[0]
  i648.orthographic = !!i649[1]
  i648.orthographicSize = i649[2]
  i648.backgroundColor = new pc.Color(i649[3], i649[4], i649[5], i649[6])
  i648.nearClipPlane = i649[7]
  i648.farClipPlane = i649[8]
  i648.fieldOfView = i649[9]
  i648.depth = i649[10]
  i648.clearFlags = i649[11]
  i648.cullingMask = i649[12]
  i648.rect = i649[13]
  request.r(i649[14], i649[15], 0, i648, 'targetTexture')
  i648.usePhysicalProperties = !!i649[16]
  i648.focalLength = i649[17]
  i648.sensorSize = new pc.Vec2( i649[18], i649[19] )
  i648.lensShift = new pc.Vec2( i649[20], i649[21] )
  i648.gateFit = i649[22]
  i648.commandBufferCount = i649[23]
  i648.cameraType = i649[24]
  i648.enabled = !!i649[25]
  return i648
}

Deserializers["BallController"] = function (request, data, root) {
  var i650 = root || request.c( 'BallController' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'ballParent')
  i650.ballLayer = UnityEngine.LayerMask.FromIntegerValue( i651[2] )
  i650.forceMultiplier = i651[3]
  request.r(i651[4], i651[5], 0, i650, 'touchTrailPrefab')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i653 = data
  i652.center = new pc.Vec3( i653[0], i653[1], i653[2] )
  i652.radius = i653[3]
  i652.enabled = !!i653[4]
  i652.isTrigger = !!i653[5]
  request.r(i653[6], i653[7], 0, i652, 'material')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i655 = data
  i654.mass = i655[0]
  i654.drag = i655[1]
  i654.angularDrag = i655[2]
  i654.useGravity = !!i655[3]
  i654.isKinematic = !!i655[4]
  i654.constraints = i655[5]
  i654.maxAngularVelocity = i655[6]
  i654.collisionDetectionMode = i655[7]
  i654.interpolation = i655[8]
  return i654
}

Deserializers["BallCheckScore"] = function (request, data, root) {
  var i656 = root || request.c( 'BallCheckScore' )
  var i657 = data
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i659 = data
  i658.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i659[0], i658.main)
  i658.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i659[1], i658.colorBySpeed)
  i658.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i659[2], i658.colorOverLifetime)
  i658.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i659[3], i658.emission)
  i658.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i659[4], i658.rotationBySpeed)
  i658.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i659[5], i658.rotationOverLifetime)
  i658.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i659[6], i658.shape)
  i658.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i659[7], i658.sizeBySpeed)
  i658.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i659[8], i658.sizeOverLifetime)
  i658.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i659[9], i658.textureSheetAnimation)
  i658.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i659[10], i658.velocityOverLifetime)
  i658.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i659[11], i658.noise)
  i658.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i659[12], i658.inheritVelocity)
  i658.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i659[13], i658.forceOverLifetime)
  i658.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i659[14], i658.limitVelocityOverLifetime)
  i658.useAutoRandomSeed = !!i659[15]
  i658.randomSeed = i659[16]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemMain()
  var i661 = data
  i660.duration = i661[0]
  i660.loop = !!i661[1]
  i660.prewarm = !!i661[2]
  i660.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.startDelay)
  i660.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[4], i660.startLifetime)
  i660.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[5], i660.startSpeed)
  i660.startSize3D = !!i661[6]
  i660.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[7], i660.startSizeX)
  i660.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[8], i660.startSizeY)
  i660.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.startSizeZ)
  i660.startRotation3D = !!i661[10]
  i660.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[11], i660.startRotationX)
  i660.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[12], i660.startRotationY)
  i660.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[13], i660.startRotationZ)
  i660.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i661[14], i660.startColor)
  i660.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[15], i660.gravityModifier)
  i660.simulationSpace = i661[16]
  request.r(i661[17], i661[18], 0, i660, 'customSimulationSpace')
  i660.simulationSpeed = i661[19]
  i660.useUnscaledTime = !!i661[20]
  i660.scalingMode = i661[21]
  i660.playOnAwake = !!i661[22]
  i660.maxParticles = i661[23]
  i660.emitterVelocityMode = i661[24]
  i660.stopAction = i661[25]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxCurve()
  var i663 = data
  i662.mode = i663[0]
  i662.curveMin = new pc.AnimationCurve( { keys_flow: i663[1] } )
  i662.curveMax = new pc.AnimationCurve( { keys_flow: i663[2] } )
  i662.curveMultiplier = i663[3]
  i662.constantMin = i663[4]
  i662.constantMax = i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i664 = root || new pc.MinMaxGradient()
  var i665 = data
  i664.mode = i665[0]
  i664.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i665[1], i664.gradientMin)
  i664.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i665[2], i664.gradientMax)
  i664.colorMin = new pc.Color(i665[3], i665[4], i665[5], i665[6])
  i664.colorMax = new pc.Color(i665[7], i665[8], i665[9], i665[10])
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i667 = data
  i666.mode = i667[0]
  var i669 = i667[1]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i669[i + 0]) );
  }
  i666.colorKeys = i668
  var i671 = i667[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i671[i + 0]) );
  }
  i666.alphaKeys = i670
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemColorBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i673[1], i672.color)
  i672.range = new pc.Vec2( i673[2], i673[3] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i677 = data
  i676.color = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  i676.time = i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i681 = data
  i680.alpha = i681[0]
  i680.time = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemColorOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i683[1], i682.color)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemEmitter()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.rateOverTime)
  i684.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.rateOverDistance)
  var i687 = i685[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i687[i + 0]) );
  }
  i684.bursts = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemBurst()
  var i691 = data
  i690.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[0], i690.count)
  i690.cycleCount = i691[1]
  i690.minCount = i691[2]
  i690.maxCount = i691[3]
  i690.repeatInterval = i691[4]
  i690.time = i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationBySpeed()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  i692.range = new pc.Vec2( i693[5], i693[6] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemRotationOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.separateAxes = !!i695[4]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemShape()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.shapeType = i697[1]
  i696.randomDirectionAmount = i697[2]
  i696.sphericalDirectionAmount = i697[3]
  i696.randomPositionAmount = i697[4]
  i696.alignToDirection = !!i697[5]
  i696.radius = i697[6]
  i696.radiusMode = i697[7]
  i696.radiusSpread = i697[8]
  i696.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[9], i696.radiusSpeed)
  i696.radiusThickness = i697[10]
  i696.angle = i697[11]
  i696.length = i697[12]
  i696.boxThickness = new pc.Vec3( i697[13], i697[14], i697[15] )
  i696.meshShapeType = i697[16]
  request.r(i697[17], i697[18], 0, i696, 'mesh')
  request.r(i697[19], i697[20], 0, i696, 'meshRenderer')
  request.r(i697[21], i697[22], 0, i696, 'skinnedMeshRenderer')
  i696.useMeshMaterialIndex = !!i697[23]
  i696.meshMaterialIndex = i697[24]
  i696.useMeshColors = !!i697[25]
  i696.normalOffset = i697[26]
  i696.arc = i697[27]
  i696.arcMode = i697[28]
  i696.arcSpread = i697[29]
  i696.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[30], i696.arcSpeed)
  i696.donutRadius = i697[31]
  i696.position = new pc.Vec3( i697[32], i697[33], i697[34] )
  i696.rotation = new pc.Vec3( i697[35], i697[36], i697[37] )
  i696.scale = new pc.Vec3( i697[38], i697[39], i697[40] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeBySpeed()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  i698.range = new pc.Vec2( i699[5], i699[6] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemSizeOverLifetime()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[1], i700.x)
  i700.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.y)
  i700.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.z)
  i700.separateAxes = !!i701[4]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.mode = i703[1]
  i702.animation = i703[2]
  i702.numTilesX = i703[3]
  i702.numTilesY = i703[4]
  i702.useRandomRow = !!i703[5]
  i702.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[6], i702.frameOverTime)
  i702.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[7], i702.startFrame)
  i702.cycleCount = i703[8]
  i702.rowIndex = i703[9]
  i702.flipU = i703[10]
  i702.flipV = i703[11]
  i702.spriteCount = i703[12]
  var i705 = i703[13]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.sprites = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.radial)
  i708.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[5], i708.speedModifier)
  i708.space = i709[6]
  i708.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[7], i708.orbitalX)
  i708.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[8], i708.orbitalY)
  i708.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[9], i708.orbitalZ)
  i708.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[10], i708.orbitalOffsetX)
  i708.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.orbitalOffsetY)
  i708.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[12], i708.orbitalOffsetZ)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemNoise()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.separateAxes = !!i711[1]
  i710.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.strengthX)
  i710.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.strengthY)
  i710.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.strengthZ)
  i710.frequency = i711[5]
  i710.damping = !!i711[6]
  i710.octaveCount = i711[7]
  i710.octaveMultiplier = i711[8]
  i710.octaveScale = i711[9]
  i710.quality = i711[10]
  i710.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[11], i710.scrollSpeed)
  i710.scrollSpeedMultiplier = i711[12]
  i710.remapEnabled = !!i711[13]
  i710.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[14], i710.remapX)
  i710.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[15], i710.remapY)
  i710.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[16], i710.remapZ)
  i710.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[17], i710.positionAmount)
  i710.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[18], i710.rotationAmount)
  i710.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[19], i710.sizeAmount)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemInheritVelocity()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.mode = i713[1]
  i712.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.curve)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemForceOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.x)
  i714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.y)
  i714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.z)
  i714.space = i715[4]
  i714.randomized = !!i715[5]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.limit)
  i716.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.limitX)
  i716.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.limitY)
  i716.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.limitZ)
  i716.dampen = i717[5]
  i716.separateAxes = !!i717[6]
  i716.space = i717[7]
  i716.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[8], i716.drag)
  i716.multiplyDragByParticleSize = !!i717[9]
  i716.multiplyDragByParticleVelocity = !!i717[10]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'mesh')
  i718.meshCount = i719[2]
  i718.activeVertexStreamsCount = i719[3]
  i718.alignment = i719[4]
  i718.renderMode = i719[5]
  i718.sortMode = i719[6]
  i718.lengthScale = i719[7]
  i718.velocityScale = i719[8]
  i718.cameraVelocityScale = i719[9]
  i718.normalDirection = i719[10]
  i718.sortingFudge = i719[11]
  i718.minParticleSize = i719[12]
  i718.maxParticleSize = i719[13]
  i718.pivot = new pc.Vec3( i719[14], i719[15], i719[16] )
  request.r(i719[17], i719[18], 0, i718, 'trailMaterial')
  i718.applyActiveColorSpace = !!i719[19]
  i718.enabled = !!i719[20]
  request.r(i719[21], i719[22], 0, i718, 'sharedMaterial')
  var i721 = i719[23]
  var i720 = []
  for(var i = 0; i < i721.length; i += 2) {
  request.r(i721[i + 0], i721[i + 1], 2, i720, '')
  }
  i718.sharedMaterials = i720
  i718.receiveShadows = !!i719[24]
  i718.shadowCastingMode = i719[25]
  i718.sortingLayerID = i719[26]
  i718.sortingOrder = i719[27]
  i718.lightmapIndex = i719[28]
  i718.lightmapSceneIndex = i719[29]
  i718.lightmapScaleOffset = new pc.Vec4( i719[30], i719[31], i719[32], i719[33] )
  i718.lightProbeUsage = i719[34]
  i718.reflectionProbeUsage = i719[35]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i723 = data
  i722.useMotor = !!i723[0]
  i722.useLimits = !!i723[1]
  i722.useSpring = !!i723[2]
  i722.limits = request.d('UnityEngine.JointLimits', i723[3], i722.limits)
  i722.motor = request.d('UnityEngine.JointMotor', i723[4], i722.motor)
  i722.spring = request.d('UnityEngine.JointSpring', i723[5], i722.spring)
  request.r(i723[6], i723[7], 0, i722, 'connectedBody')
  i722.axis = new pc.Vec3( i723[8], i723[9], i723[10] )
  i722.anchor = new pc.Vec3( i723[11], i723[12], i723[13] )
  i722.connectedAnchor = new pc.Vec3( i723[14], i723[15], i723[16] )
  i722.autoConfigureConnectedAnchor = !!i723[17]
  i722.massScale = i723[18]
  i722.connectedMassScale = i723[19]
  i722.enableCollision = !!i723[20]
  i722.breakForce = i723[21]
  i722.breakTorque = i723[22]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i725 = data
  i724.center = new pc.Vec3( i725[0], i725[1], i725[2] )
  i724.radius = i725[3]
  i724.height = i725[4]
  i724.direction = i725[5]
  i724.enabled = !!i725[6]
  i724.isTrigger = !!i725[7]
  request.r(i725[8], i725[9], 0, i724, 'material')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'sharedMesh')
  var i729 = i727[2]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.bones = i728
  i726.updateWhenOffscreen = !!i727[3]
  i726.localBounds = i727[4]
  request.r(i727[5], i727[6], 0, i726, 'rootBone')
  var i731 = i727[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i731[i + 0]) );
  }
  i726.blendShapesWeights = i730
  i726.enabled = !!i727[8]
  request.r(i727[9], i727[10], 0, i726, 'sharedMaterial')
  var i733 = i727[11]
  var i732 = []
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 2, i732, '')
  }
  i726.sharedMaterials = i732
  i726.receiveShadows = !!i727[12]
  i726.shadowCastingMode = i727[13]
  i726.sortingLayerID = i727[14]
  i726.sortingOrder = i727[15]
  i726.lightmapIndex = i727[16]
  i726.lightmapSceneIndex = i727[17]
  i726.lightmapScaleOffset = new pc.Vec4( i727[18], i727[19], i727[20], i727[21] )
  i726.lightProbeUsage = i727[22]
  i726.reflectionProbeUsage = i727[23]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i739 = data
  i738.weight = i739[0]
  return i738
}

Deserializers["GameManager"] = function (request, data, root) {
  var i740 = root || request.c( 'GameManager' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'scoreText')
  i740.score = i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i743 = data
  i742.pivot = new pc.Vec2( i743[0], i743[1] )
  i742.anchorMin = new pc.Vec2( i743[2], i743[3] )
  i742.anchorMax = new pc.Vec2( i743[4], i743[5] )
  i742.sizeDelta = new pc.Vec2( i743[6], i743[7] )
  i742.anchoredPosition3D = new pc.Vec3( i743[8], i743[9], i743[10] )
  i742.rotation = new pc.Quat(i743[11], i743[12], i743[13], i743[14])
  i742.scale = new pc.Vec3( i743[15], i743[16], i743[17] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i745 = data
  i744.planeDistance = i745[0]
  i744.referencePixelsPerUnit = i745[1]
  i744.isFallbackOverlay = !!i745[2]
  i744.renderMode = i745[3]
  i744.renderOrder = i745[4]
  i744.sortingLayerName = i745[5]
  i744.sortingOrder = i745[6]
  i744.scaleFactor = i745[7]
  request.r(i745[8], i745[9], 0, i744, 'worldCamera')
  i744.overrideSorting = !!i745[10]
  i744.pixelPerfect = !!i745[11]
  i744.targetDisplay = i745[12]
  i744.overridePixelPerfect = !!i745[13]
  i744.enabled = !!i745[14]
  return i744
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i747 = data
  i746.m_UiScaleMode = i747[0]
  i746.m_ReferencePixelsPerUnit = i747[1]
  i746.m_ScaleFactor = i747[2]
  i746.m_ReferenceResolution = new pc.Vec2( i747[3], i747[4] )
  i746.m_ScreenMatchMode = i747[5]
  i746.m_MatchWidthOrHeight = i747[6]
  i746.m_PhysicalUnit = i747[7]
  i746.m_FallbackScreenDPI = i747[8]
  i746.m_DefaultSpriteDPI = i747[9]
  i746.m_DynamicPixelsPerUnit = i747[10]
  i746.m_PresetInfoIsWorld = !!i747[11]
  return i746
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i749 = data
  i748.m_IgnoreReversedGraphics = !!i749[0]
  i748.m_BlockingObjects = i749[1]
  i748.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i749[2] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i751 = data
  i750.cullTransparentMesh = !!i751[0]
  return i750
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Image' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_Sprite')
  i752.m_Type = i753[2]
  i752.m_PreserveAspect = !!i753[3]
  i752.m_FillCenter = !!i753[4]
  i752.m_FillMethod = i753[5]
  i752.m_FillAmount = i753[6]
  i752.m_FillClockwise = !!i753[7]
  i752.m_FillOrigin = i753[8]
  i752.m_UseSpriteMesh = !!i753[9]
  i752.m_PixelsPerUnitMultiplier = i753[10]
  i752.m_Maskable = !!i753[11]
  request.r(i753[12], i753[13], 0, i752, 'm_Material')
  i752.m_Color = new pc.Color(i753[14], i753[15], i753[16], i753[17])
  i752.m_RaycastTarget = !!i753[18]
  i752.m_RaycastPadding = new pc.Vec4( i753[19], i753[20], i753[21], i753[22] )
  return i752
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Button' )
  var i755 = data
  i754.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i755[0], i754.m_OnClick)
  i754.m_Navigation = request.d('UnityEngine.UI.Navigation', i755[1], i754.m_Navigation)
  i754.m_Transition = i755[2]
  i754.m_Colors = request.d('UnityEngine.UI.ColorBlock', i755[3], i754.m_Colors)
  i754.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i755[4], i754.m_SpriteState)
  i754.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i755[5], i754.m_AnimationTriggers)
  i754.m_Interactable = !!i755[6]
  request.r(i755[7], i755[8], 0, i754, 'm_TargetGraphic')
  return i754
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i757 = data
  i756.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i757[0], i756.m_PersistentCalls)
  return i756
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('UnityEngine.Events.PersistentCall', i761[i + 0]));
  }
  i758.m_Calls = i760
  return i758
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Target')
  i764.m_TargetAssemblyTypeName = i765[2]
  i764.m_MethodName = i765[3]
  i764.m_Mode = i765[4]
  i764.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i765[5], i764.m_Arguments)
  i764.m_CallState = i765[6]
  return i764
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i767 = data
  i766.m_Mode = i767[0]
  i766.m_WrapAround = !!i767[1]
  request.r(i767[2], i767[3], 0, i766, 'm_SelectOnUp')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectOnDown')
  request.r(i767[6], i767[7], 0, i766, 'm_SelectOnLeft')
  request.r(i767[8], i767[9], 0, i766, 'm_SelectOnRight')
  return i766
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i769 = data
  i768.m_NormalColor = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.m_HighlightedColor = new pc.Color(i769[4], i769[5], i769[6], i769[7])
  i768.m_PressedColor = new pc.Color(i769[8], i769[9], i769[10], i769[11])
  i768.m_SelectedColor = new pc.Color(i769[12], i769[13], i769[14], i769[15])
  i768.m_DisabledColor = new pc.Color(i769[16], i769[17], i769[18], i769[19])
  i768.m_ColorMultiplier = i769[20]
  i768.m_FadeDuration = i769[21]
  return i768
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_HighlightedSprite')
  request.r(i771[2], i771[3], 0, i770, 'm_PressedSprite')
  request.r(i771[4], i771[5], 0, i770, 'm_SelectedSprite')
  request.r(i771[6], i771[7], 0, i770, 'm_DisabledSprite')
  return i770
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i773 = data
  i772.m_NormalTrigger = i773[0]
  i772.m_HighlightedTrigger = i773[1]
  i772.m_PressedTrigger = i773[2]
  i772.m_SelectedTrigger = i773[3]
  i772.m_DisabledTrigger = i773[4]
  return i772
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i775 = data
  i774.m_hasFontAssetChanged = !!i775[0]
  request.r(i775[1], i775[2], 0, i774, 'm_baseMaterial')
  i774.m_maskOffset = new pc.Vec4( i775[3], i775[4], i775[5], i775[6] )
  i774.m_text = i775[7]
  i774.m_isRightToLeft = !!i775[8]
  request.r(i775[9], i775[10], 0, i774, 'm_fontAsset')
  request.r(i775[11], i775[12], 0, i774, 'm_sharedMaterial')
  var i777 = i775[13]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.m_fontSharedMaterials = i776
  request.r(i775[14], i775[15], 0, i774, 'm_fontMaterial')
  var i779 = i775[16]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i774.m_fontMaterials = i778
  i774.m_fontColor32 = UnityEngine.Color32.ConstructColor(i775[17], i775[18], i775[19], i775[20])
  i774.m_fontColor = new pc.Color(i775[21], i775[22], i775[23], i775[24])
  i774.m_enableVertexGradient = !!i775[25]
  i774.m_colorMode = i775[26]
  i774.m_fontColorGradient = request.d('TMPro.VertexGradient', i775[27], i774.m_fontColorGradient)
  request.r(i775[28], i775[29], 0, i774, 'm_fontColorGradientPreset')
  request.r(i775[30], i775[31], 0, i774, 'm_spriteAsset')
  i774.m_tintAllSprites = !!i775[32]
  request.r(i775[33], i775[34], 0, i774, 'm_StyleSheet')
  i774.m_TextStyleHashCode = i775[35]
  i774.m_overrideHtmlColors = !!i775[36]
  i774.m_faceColor = UnityEngine.Color32.ConstructColor(i775[37], i775[38], i775[39], i775[40])
  i774.m_fontSize = i775[41]
  i774.m_fontSizeBase = i775[42]
  i774.m_fontWeight = i775[43]
  i774.m_enableAutoSizing = !!i775[44]
  i774.m_fontSizeMin = i775[45]
  i774.m_fontSizeMax = i775[46]
  i774.m_fontStyle = i775[47]
  i774.m_HorizontalAlignment = i775[48]
  i774.m_VerticalAlignment = i775[49]
  i774.m_textAlignment = i775[50]
  i774.m_characterSpacing = i775[51]
  i774.m_wordSpacing = i775[52]
  i774.m_lineSpacing = i775[53]
  i774.m_lineSpacingMax = i775[54]
  i774.m_paragraphSpacing = i775[55]
  i774.m_charWidthMaxAdj = i775[56]
  i774.m_enableWordWrapping = !!i775[57]
  i774.m_wordWrappingRatios = i775[58]
  i774.m_overflowMode = i775[59]
  request.r(i775[60], i775[61], 0, i774, 'm_linkedTextComponent')
  request.r(i775[62], i775[63], 0, i774, 'parentLinkedComponent')
  i774.m_enableKerning = !!i775[64]
  i774.m_enableExtraPadding = !!i775[65]
  i774.checkPaddingRequired = !!i775[66]
  i774.m_isRichText = !!i775[67]
  i774.m_parseCtrlCharacters = !!i775[68]
  i774.m_isOrthographic = !!i775[69]
  i774.m_isCullingEnabled = !!i775[70]
  i774.m_horizontalMapping = i775[71]
  i774.m_verticalMapping = i775[72]
  i774.m_uvLineOffset = i775[73]
  i774.m_geometrySortingOrder = i775[74]
  i774.m_IsTextObjectScaleStatic = !!i775[75]
  i774.m_VertexBufferAutoSizeReduction = !!i775[76]
  i774.m_useMaxVisibleDescender = !!i775[77]
  i774.m_pageToDisplay = i775[78]
  i774.m_margin = new pc.Vec4( i775[79], i775[80], i775[81], i775[82] )
  i774.m_isUsingLegacyAnimationComponent = !!i775[83]
  i774.m_isVolumetricText = !!i775[84]
  i774.m_Maskable = !!i775[85]
  request.r(i775[86], i775[87], 0, i774, 'm_Material')
  i774.m_Color = new pc.Color(i775[88], i775[89], i775[90], i775[91])
  i774.m_RaycastTarget = !!i775[92]
  i774.m_RaycastPadding = new pc.Vec4( i775[93], i775[94], i775[95], i775[96] )
  return i774
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i780 = root || request.c( 'TMPro.VertexGradient' )
  var i781 = data
  i780.topLeft = new pc.Color(i781[0], i781[1], i781[2], i781[3])
  i780.topRight = new pc.Color(i781[4], i781[5], i781[6], i781[7])
  i780.bottomLeft = new pc.Color(i781[8], i781[9], i781[10], i781[11])
  i780.bottomRight = new pc.Color(i781[12], i781[13], i781[14], i781[15])
  return i780
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_Texture')
  i782.m_UVRect = UnityEngine.Rect.MinMaxRect(i783[2], i783[3], i783[4], i783[5])
  i782.m_Maskable = !!i783[6]
  request.r(i783[7], i783[8], 0, i782, 'm_Material')
  i782.m_Color = new pc.Color(i783[9], i783[10], i783[11], i783[12])
  i782.m_RaycastTarget = !!i783[13]
  i782.m_RaycastPadding = new pc.Vec4( i783[14], i783[15], i783[16], i783[17] )
  return i782
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'm_ObjectArgument')
  i784.m_ObjectArgumentAssemblyTypeName = i785[2]
  i784.m_IntArgument = i785[3]
  i784.m_FloatArgument = i785[4]
  i784.m_StringArgument = i785[5]
  i784.m_BoolArgument = !!i785[6]
  return i784
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'm_FirstSelected')
  i786.m_sendNavigationEvents = !!i787[2]
  i786.m_DragThreshold = i787[3]
  return i786
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i789 = data
  i788.m_HorizontalAxis = i789[0]
  i788.m_VerticalAxis = i789[1]
  i788.m_SubmitButton = i789[2]
  i788.m_CancelButton = i789[3]
  i788.m_InputActionsPerSecond = i789[4]
  i788.m_RepeatDelay = i789[5]
  i788.m_ForceModuleActive = !!i789[6]
  i788.m_SendPointerHoverToParent = !!i789[7]
  return i788
}

Deserializers["BallSelectRotate"] = function (request, data, root) {
  var i790 = root || request.c( 'BallSelectRotate' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'ballSelectParent')
  request.r(i791[2], i791[3], 0, i790, 'ballParent')
  i790.rotationSpeed = i791[4]
  request.r(i791[5], i791[6], 0, i790, 'panelSelectBall')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i793 = data
  i792.color = new pc.Color(i793[0], i793[1], i793[2], i793[3])
  request.r(i793[4], i793[5], 0, i792, 'sprite')
  i792.flipX = !!i793[6]
  i792.flipY = !!i793[7]
  i792.drawMode = i793[8]
  i792.size = new pc.Vec2( i793[9], i793[10] )
  i792.tileMode = i793[11]
  i792.adaptiveModeThreshold = i793[12]
  i792.maskInteraction = i793[13]
  i792.spriteSortPoint = i793[14]
  i792.enabled = !!i793[15]
  request.r(i793[16], i793[17], 0, i792, 'sharedMaterial')
  var i795 = i793[18]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[19]
  i792.shadowCastingMode = i793[20]
  i792.sortingLayerID = i793[21]
  i792.sortingOrder = i793[22]
  i792.lightmapIndex = i793[23]
  i792.lightmapSceneIndex = i793[24]
  i792.lightmapScaleOffset = new pc.Vec4( i793[25], i793[26], i793[27], i793[28] )
  i792.lightProbeUsage = i793[29]
  i792.reflectionProbeUsage = i793[30]
  return i792
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i796 = root || request.c( 'AudioManager' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sfx = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'clip')
  request.r(i803[2], i803[3], 0, i802, 'outputAudioMixerGroup')
  i802.playOnAwake = !!i803[4]
  i802.loop = !!i803[5]
  i802.time = i803[6]
  i802.volume = i803[7]
  i802.pitch = i803[8]
  i802.enabled = !!i803[9]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i805 = data
  i804.ambientIntensity = i805[0]
  i804.reflectionIntensity = i805[1]
  i804.ambientMode = i805[2]
  i804.ambientLight = new pc.Color(i805[3], i805[4], i805[5], i805[6])
  i804.ambientSkyColor = new pc.Color(i805[7], i805[8], i805[9], i805[10])
  i804.ambientGroundColor = new pc.Color(i805[11], i805[12], i805[13], i805[14])
  i804.ambientEquatorColor = new pc.Color(i805[15], i805[16], i805[17], i805[18])
  i804.fogColor = new pc.Color(i805[19], i805[20], i805[21], i805[22])
  i804.fogEndDistance = i805[23]
  i804.fogStartDistance = i805[24]
  i804.fogDensity = i805[25]
  i804.fog = !!i805[26]
  request.r(i805[27], i805[28], 0, i804, 'skybox')
  i804.fogMode = i805[29]
  var i807 = i805[30]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i807[i + 0]) );
  }
  i804.lightmaps = i806
  i804.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i805[31], i804.lightProbes)
  i804.lightmapsMode = i805[32]
  i804.mixedBakeMode = i805[33]
  i804.environmentLightingMode = i805[34]
  i804.ambientProbe = new pc.SphericalHarmonicsL2(i805[35])
  i804.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i805[36])
  i804.useReferenceAmbientProbe = !!i805[37]
  request.r(i805[38], i805[39], 0, i804, 'customReflection')
  request.r(i805[40], i805[41], 0, i804, 'defaultReflection')
  i804.defaultReflectionMode = i805[42]
  i804.defaultReflectionResolution = i805[43]
  i804.sunLightObjectId = i805[44]
  i804.pixelLightCount = i805[45]
  i804.defaultReflectionHDR = !!i805[46]
  i804.hasLightDataAsset = !!i805[47]
  i804.hasManualGenerate = !!i805[48]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'lightmapColor')
  request.r(i811[2], i811[3], 0, i810, 'lightmapDirection')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i812 = root || new UnityEngine.LightProbes()
  var i813 = data
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i819 = data
  i818.name = i819[0]
  i818.bounciness = i819[1]
  i818.dynamicFriction = i819[2]
  i818.staticFriction = i819[3]
  i818.frictionCombine = i819[4]
  i818.bounceCombine = i819[5]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i821 = data
  var i823 = i821[0]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i823.length; i += 1) {
    i822.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i823[i + 0]));
  }
  i820.ShaderCompilationErrors = i822
  i820.name = i821[1]
  i820.guid = i821[2]
  var i825 = i821[3]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i820.shaderDefinedKeywords = i824
  var i827 = i821[4]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i827[i + 0]) );
  }
  i820.passes = i826
  var i829 = i821[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i829[i + 0]) );
  }
  i820.usePasses = i828
  var i831 = i821[6]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i831[i + 0]) );
  }
  i820.defaultParameterValues = i830
  request.r(i821[7], i821[8], 0, i820, 'unityFallbackShader')
  i820.readDepth = !!i821[9]
  i820.isCreatedByShaderGraph = !!i821[10]
  i820.disableBatching = !!i821[11]
  i820.compiled = !!i821[12]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i835 = data
  i834.shaderName = i835[0]
  i834.errorMessage = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i840 = root || new pc.UnityShaderPass()
  var i841 = data
  i840.id = i841[0]
  i840.subShaderIndex = i841[1]
  i840.name = i841[2]
  i840.passType = i841[3]
  i840.grabPassTextureName = i841[4]
  i840.usePass = !!i841[5]
  i840.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[6], i840.zTest)
  i840.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[7], i840.zWrite)
  i840.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[8], i840.culling)
  i840.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i841[9], i840.blending)
  i840.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i841[10], i840.alphaBlending)
  i840.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[11], i840.colorWriteMask)
  i840.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[12], i840.offsetUnits)
  i840.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[13], i840.offsetFactor)
  i840.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[14], i840.stencilRef)
  i840.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[15], i840.stencilReadMask)
  i840.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i841[16], i840.stencilWriteMask)
  i840.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i841[17], i840.stencilOp)
  i840.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i841[18], i840.stencilOpFront)
  i840.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i841[19], i840.stencilOpBack)
  var i843 = i841[20]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i843[i + 0]) );
  }
  i840.tags = i842
  var i845 = i841[21]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i840.passDefinedKeywords = i844
  var i847 = i841[22]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i847[i + 0]) );
  }
  i840.passDefinedKeywordGroups = i846
  var i849 = i841[23]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i849[i + 0]) );
  }
  i840.variants = i848
  var i851 = i841[24]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i851[i + 0]) );
  }
  i840.excludedVariants = i850
  i840.hasDepthReader = !!i841[25]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i853 = data
  i852.val = i853[0]
  i852.name = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i855 = data
  i854.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[0], i854.src)
  i854.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[1], i854.dst)
  i854.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i855[2], i854.op)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i857 = data
  i856.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[0], i856.pass)
  i856.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[1], i856.fail)
  i856.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[2], i856.zFail)
  i856.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i857[3], i856.comp)
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i861 = data
  i860.name = i861[0]
  i860.value = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.keywords = i866
  i864.hasDiscard = !!i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i871 = data
  i870.passId = i871[0]
  i870.subShaderIndex = i871[1]
  var i873 = i871[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i870.keywords = i872
  i870.vertexProgram = i871[3]
  i870.fragmentProgram = i871[4]
  i870.exportedForWebGl2 = !!i871[5]
  i870.readDepth = !!i871[6]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'shader')
  i876.pass = i877[2]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i881 = data
  i880.name = i881[0]
  i880.type = i881[1]
  i880.value = new pc.Vec4( i881[2], i881[3], i881[4], i881[5] )
  i880.textureValue = i881[6]
  i880.shaderPropertyFlag = i881[7]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i883 = data
  i882.name = i883[0]
  request.r(i883[1], i883[2], 0, i882, 'texture')
  i882.aabb = i883[3]
  i882.vertices = i883[4]
  i882.triangles = i883[5]
  i882.textureRect = UnityEngine.Rect.MinMaxRect(i883[6], i883[7], i883[8], i883[9])
  i882.packedRect = UnityEngine.Rect.MinMaxRect(i883[10], i883[11], i883[12], i883[13])
  i882.border = new pc.Vec4( i883[14], i883[15], i883[16], i883[17] )
  i882.transparency = i883[18]
  i882.bounds = i883[19]
  i882.pixelsPerUnit = i883[20]
  i882.textureWidth = i883[21]
  i882.textureHeight = i883[22]
  i882.nativeSize = new pc.Vec2( i883[23], i883[24] )
  i882.pivot = new pc.Vec2( i883[25], i883[26] )
  i882.textureRectOffset = new pc.Vec2( i883[27], i883[28] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i885 = data
  i884.name = i885[0]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i887 = data
  i886.name = i887[0]
  i886.ascent = i887[1]
  i886.originalLineHeight = i887[2]
  i886.fontSize = i887[3]
  var i889 = i887[4]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i889[i + 0]) );
  }
  i886.characterInfo = i888
  request.r(i887[5], i887[6], 0, i886, 'texture')
  i886.originalFontSize = i887[7]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i893 = data
  i892.index = i893[0]
  i892.advance = i893[1]
  i892.bearing = i893[2]
  i892.glyphWidth = i893[3]
  i892.glyphHeight = i893[4]
  i892.minX = i893[5]
  i892.maxX = i893[6]
  i892.minY = i893[7]
  i892.maxY = i893[8]
  i892.uvBottomLeftX = i893[9]
  i892.uvBottomLeftY = i893[10]
  i892.uvBottomRightX = i893[11]
  i892.uvBottomRightY = i893[12]
  i892.uvTopLeftX = i893[13]
  i892.uvTopLeftY = i893[14]
  i892.uvTopRightX = i893[15]
  i892.uvTopRightY = i893[16]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i895 = data
  i894.name = i895[0]
  i894.bytes64 = i895[1]
  i894.data = i895[2]
  return i894
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i896 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'atlas')
  i896.normalStyle = i897[2]
  i896.normalSpacingOffset = i897[3]
  i896.boldStyle = i897[4]
  i896.boldSpacing = i897[5]
  i896.italicStyle = i897[6]
  i896.tabSize = i897[7]
  i896.hashCode = i897[8]
  request.r(i897[9], i897[10], 0, i896, 'material')
  i896.materialHashCode = i897[11]
  i896.m_Version = i897[12]
  i896.m_SourceFontFileGUID = i897[13]
  request.r(i897[14], i897[15], 0, i896, 'm_SourceFontFile_EditorRef')
  request.r(i897[16], i897[17], 0, i896, 'm_SourceFontFile')
  i896.m_AtlasPopulationMode = i897[18]
  i896.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i897[19], i896.m_FaceInfo)
  var i899 = i897[20]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i899.length; i += 1) {
    i898.add(request.d('UnityEngine.TextCore.Glyph', i899[i + 0]));
  }
  i896.m_GlyphTable = i898
  var i901 = i897[21]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(request.d('TMPro.TMP_Character', i901[i + 0]));
  }
  i896.m_CharacterTable = i900
  var i903 = i897[22]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i896.m_AtlasTextures = i902
  i896.m_AtlasTextureIndex = i897[23]
  i896.m_IsMultiAtlasTexturesEnabled = !!i897[24]
  i896.m_ClearDynamicDataOnBuild = !!i897[25]
  var i905 = i897[26]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('UnityEngine.TextCore.GlyphRect', i905[i + 0]));
  }
  i896.m_UsedGlyphRects = i904
  var i907 = i897[27]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('UnityEngine.TextCore.GlyphRect', i907[i + 0]));
  }
  i896.m_FreeGlyphRects = i906
  i896.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i897[28], i896.m_fontInfo)
  i896.m_AtlasWidth = i897[29]
  i896.m_AtlasHeight = i897[30]
  i896.m_AtlasPadding = i897[31]
  i896.m_AtlasRenderMode = i897[32]
  var i909 = i897[33]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i909.length; i += 1) {
    i908.add(request.d('TMPro.TMP_Glyph', i909[i + 0]));
  }
  i896.m_glyphInfoList = i908
  i896.m_KerningTable = request.d('TMPro.KerningTable', i897[34], i896.m_KerningTable)
  i896.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i897[35], i896.m_FontFeatureTable)
  var i911 = i897[36]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i896.fallbackFontAssets = i910
  var i913 = i897[37]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 1, i912, '')
  }
  i896.m_FallbackFontAssetTable = i912
  i896.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i897[38], i896.m_CreationSettings)
  var i915 = i897[39]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('TMPro.TMP_FontWeightPair', i915[i + 0]) );
  }
  i896.m_FontWeightTable = i914
  var i917 = i897[40]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('TMPro.TMP_FontWeightPair', i917[i + 0]) );
  }
  i896.fontWeights = i916
  return i896
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i919 = data
  i918.m_FaceIndex = i919[0]
  i918.m_FamilyName = i919[1]
  i918.m_StyleName = i919[2]
  i918.m_PointSize = i919[3]
  i918.m_Scale = i919[4]
  i918.m_UnitsPerEM = i919[5]
  i918.m_LineHeight = i919[6]
  i918.m_AscentLine = i919[7]
  i918.m_CapLine = i919[8]
  i918.m_MeanLine = i919[9]
  i918.m_Baseline = i919[10]
  i918.m_DescentLine = i919[11]
  i918.m_SuperscriptOffset = i919[12]
  i918.m_SuperscriptSize = i919[13]
  i918.m_SubscriptOffset = i919[14]
  i918.m_SubscriptSize = i919[15]
  i918.m_UnderlineOffset = i919[16]
  i918.m_UnderlineThickness = i919[17]
  i918.m_StrikethroughOffset = i919[18]
  i918.m_StrikethroughThickness = i919[19]
  i918.m_TabWidth = i919[20]
  return i918
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i923 = data
  i922.m_Index = i923[0]
  i922.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i923[1], i922.m_Metrics)
  i922.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i923[2], i922.m_GlyphRect)
  i922.m_Scale = i923[3]
  i922.m_AtlasIndex = i923[4]
  i922.m_ClassDefinitionType = i923[5]
  return i922
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i925 = data
  i924.m_Width = i925[0]
  i924.m_Height = i925[1]
  i924.m_HorizontalBearingX = i925[2]
  i924.m_HorizontalBearingY = i925[3]
  i924.m_HorizontalAdvance = i925[4]
  return i924
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i927 = data
  i926.m_X = i927[0]
  i926.m_Y = i927[1]
  i926.m_Width = i927[2]
  i926.m_Height = i927[3]
  return i926
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_Character' )
  var i931 = data
  i930.m_ElementType = i931[0]
  i930.m_Unicode = i931[1]
  i930.m_GlyphIndex = i931[2]
  i930.m_Scale = i931[3]
  return i930
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i936 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i937 = data
  i936.Name = i937[0]
  i936.PointSize = i937[1]
  i936.Scale = i937[2]
  i936.CharacterCount = i937[3]
  i936.LineHeight = i937[4]
  i936.Baseline = i937[5]
  i936.Ascender = i937[6]
  i936.CapHeight = i937[7]
  i936.Descender = i937[8]
  i936.CenterLine = i937[9]
  i936.SuperscriptOffset = i937[10]
  i936.SubscriptOffset = i937[11]
  i936.SubSize = i937[12]
  i936.Underline = i937[13]
  i936.UnderlineThickness = i937[14]
  i936.strikethrough = i937[15]
  i936.strikethroughThickness = i937[16]
  i936.TabWidth = i937[17]
  i936.Padding = i937[18]
  i936.AtlasWidth = i937[19]
  i936.AtlasHeight = i937[20]
  return i936
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_Glyph' )
  var i941 = data
  i940.id = i941[0]
  i940.x = i941[1]
  i940.y = i941[2]
  i940.width = i941[3]
  i940.height = i941[4]
  i940.xOffset = i941[5]
  i940.yOffset = i941[6]
  i940.xAdvance = i941[7]
  i940.scale = i941[8]
  return i940
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.KerningTable' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('TMPro.KerningPair', i945[i + 0]));
  }
  i942.kerningPairs = i944
  return i942
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.KerningPair' )
  var i949 = data
  i948.xOffset = i949[0]
  i948.m_FirstGlyph = i949[1]
  i948.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i949[2], i948.m_FirstGlyphAdjustments)
  i948.m_SecondGlyph = i949[3]
  i948.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i949[4], i948.m_SecondGlyphAdjustments)
  i948.m_IgnoreSpacingAdjustments = !!i949[5]
  return i948
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i951 = data
  var i953 = i951[0]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i953[i + 0]));
  }
  i950.m_GlyphPairAdjustmentRecords = i952
  return i950
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i957 = data
  i956.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i957[0], i956.m_FirstAdjustmentRecord)
  i956.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i957[1], i956.m_SecondAdjustmentRecord)
  i956.m_FeatureLookupFlags = i957[2]
  return i956
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i959 = data
  i958.m_GlyphIndex = i959[0]
  i958.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i959[1], i958.m_GlyphValueRecord)
  return i958
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i961 = data
  i960.m_XPlacement = i961[0]
  i960.m_YPlacement = i961[1]
  i960.m_XAdvance = i961[2]
  i960.m_YAdvance = i961[3]
  return i960
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i965 = data
  i964.sourceFontFileName = i965[0]
  i964.sourceFontFileGUID = i965[1]
  i964.pointSizeSamplingMode = i965[2]
  i964.pointSize = i965[3]
  i964.padding = i965[4]
  i964.packingMode = i965[5]
  i964.atlasWidth = i965[6]
  i964.atlasHeight = i965[7]
  i964.characterSetSelectionMode = i965[8]
  i964.characterSequence = i965[9]
  i964.referencedFontAssetGUID = i965[10]
  i964.referencedTextAssetGUID = i965[11]
  i964.fontStyle = i965[12]
  i964.fontStyleModifier = i965[13]
  i964.renderMode = i965[14]
  i964.includeFontFeatures = !!i965[15]
  return i964
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'regularTypeface')
  request.r(i969[2], i969[3], 0, i968, 'italicTypeface')
  return i968
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Settings' )
  var i971 = data
  i970.m_enableWordWrapping = !!i971[0]
  i970.m_enableKerning = !!i971[1]
  i970.m_enableExtraPadding = !!i971[2]
  i970.m_enableTintAllSprites = !!i971[3]
  i970.m_enableParseEscapeCharacters = !!i971[4]
  i970.m_EnableRaycastTarget = !!i971[5]
  i970.m_GetFontFeaturesAtRuntime = !!i971[6]
  i970.m_missingGlyphCharacter = i971[7]
  i970.m_warningsDisabled = !!i971[8]
  request.r(i971[9], i971[10], 0, i970, 'm_defaultFontAsset')
  i970.m_defaultFontAssetPath = i971[11]
  i970.m_defaultFontSize = i971[12]
  i970.m_defaultAutoSizeMinRatio = i971[13]
  i970.m_defaultAutoSizeMaxRatio = i971[14]
  i970.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i971[15], i971[16] )
  i970.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i971[17], i971[18] )
  i970.m_autoSizeTextContainer = !!i971[19]
  i970.m_IsTextObjectScaleStatic = !!i971[20]
  var i973 = i971[21]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.m_fallbackFontAssets = i972
  i970.m_matchMaterialPreset = !!i971[22]
  request.r(i971[23], i971[24], 0, i970, 'm_defaultSpriteAsset')
  i970.m_defaultSpriteAssetPath = i971[25]
  i970.m_enableEmojiSupport = !!i971[26]
  i970.m_MissingCharacterSpriteUnicode = i971[27]
  i970.m_defaultColorGradientPresetsPath = i971[28]
  request.r(i971[29], i971[30], 0, i970, 'm_defaultStyleSheet')
  i970.m_StyleSheetsResourcePath = i971[31]
  request.r(i971[32], i971[33], 0, i970, 'm_leadingCharacters')
  request.r(i971[34], i971[35], 0, i970, 'm_followingCharacters')
  i970.m_UseModernHangulLineBreakingRules = !!i971[36]
  return i970
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'spriteSheet')
  var i977 = i975[2]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i977.length; i += 1) {
    i976.add(request.d('TMPro.TMP_Sprite', i977[i + 0]));
  }
  i974.spriteInfoList = i976
  var i979 = i975[3]
  var i978 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 1, i978, '')
  }
  i974.fallbackSpriteAssets = i978
  i974.hashCode = i975[4]
  request.r(i975[5], i975[6], 0, i974, 'material')
  i974.materialHashCode = i975[7]
  i974.m_Version = i975[8]
  i974.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i975[9], i974.m_FaceInfo)
  var i981 = i975[10]
  var i980 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i981.length; i += 1) {
    i980.add(request.d('TMPro.TMP_SpriteCharacter', i981[i + 0]));
  }
  i974.m_SpriteCharacterTable = i980
  var i983 = i975[11]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.TMP_SpriteGlyph', i983[i + 0]));
  }
  i974.m_SpriteGlyphTable = i982
  return i974
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Sprite' )
  var i987 = data
  i986.name = i987[0]
  i986.hashCode = i987[1]
  i986.unicode = i987[2]
  i986.pivot = new pc.Vec2( i987[3], i987[4] )
  request.r(i987[5], i987[6], 0, i986, 'sprite')
  i986.id = i987[7]
  i986.x = i987[8]
  i986.y = i987[9]
  i986.width = i987[10]
  i986.height = i987[11]
  i986.xOffset = i987[12]
  i986.yOffset = i987[13]
  i986.xAdvance = i987[14]
  i986.scale = i987[15]
  return i986
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i993 = data
  i992.m_Name = i993[0]
  i992.m_HashCode = i993[1]
  i992.m_ElementType = i993[2]
  i992.m_Unicode = i993[3]
  i992.m_GlyphIndex = i993[4]
  i992.m_Scale = i993[5]
  return i992
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'sprite')
  i996.m_Index = i997[2]
  i996.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i997[3], i996.m_Metrics)
  i996.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i997[4], i996.m_GlyphRect)
  i996.m_Scale = i997[5]
  i996.m_AtlasIndex = i997[6]
  i996.m_ClassDefinitionType = i997[7]
  return i996
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_Style', i1001[i + 0]));
  }
  i998.m_StyleList = i1000
  return i998
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_Style' )
  var i1005 = data
  i1004.m_Name = i1005[0]
  i1004.m_HashCode = i1005[1]
  i1004.m_OpeningDefinition = i1005[2]
  i1004.m_ClosingDefinition = i1005[3]
  i1004.m_OpeningTagArray = i1005[4]
  i1004.m_ClosingTagArray = i1005[5]
  i1004.m_OpeningTagUnicodeArray = i1005[6]
  i1004.m_ClosingTagUnicodeArray = i1005[7]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1009[i + 0]) );
  }
  i1006.files = i1008
  i1006.componentToPrefabIds = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1013 = data
  i1012.path = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'unityObject')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1017[i + 0]) );
  }
  i1014.scriptsExecutionOrder = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1019[i + 0]) );
  }
  i1014.sortingLayers = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1021[i + 0]) );
  }
  i1014.cullingLayers = i1020
  i1014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1015[3], i1014.timeSettings)
  i1014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1015[4], i1014.physicsSettings)
  i1014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1015[5], i1014.physics2DSettings)
  i1014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[6], i1014.qualitySettings)
  i1014.enableRealtimeShadows = !!i1015[7]
  i1014.enableAutoInstancing = !!i1015[8]
  i1014.enableStaticBatching = !!i1015[9]
  i1014.enableDynamicBatching = !!i1015[10]
  i1014.lightmapEncodingQuality = i1015[11]
  i1014.desiredColorSpace = i1015[12]
  var i1023 = i1015[13]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1014.allTags = i1022
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  i1030.value = i1031[2]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1035 = data
  i1034.id = i1035[0]
  i1034.name = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1037 = data
  i1036.fixedDeltaTime = i1037[0]
  i1036.maximumDeltaTime = i1037[1]
  i1036.timeScale = i1037[2]
  i1036.maximumParticleTimestep = i1037[3]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1039 = data
  i1038.gravity = new pc.Vec3( i1039[0], i1039[1], i1039[2] )
  i1038.defaultSolverIterations = i1039[3]
  i1038.bounceThreshold = i1039[4]
  i1038.autoSyncTransforms = !!i1039[5]
  i1038.autoSimulation = !!i1039[6]
  var i1041 = i1039[7]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1041[i + 0]) );
  }
  i1038.collisionMatrix = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1045 = data
  i1044.enabled = !!i1045[0]
  i1044.layerId = i1045[1]
  i1044.otherLayerId = i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'material')
  i1046.gravity = new pc.Vec2( i1047[2], i1047[3] )
  i1046.positionIterations = i1047[4]
  i1046.velocityIterations = i1047[5]
  i1046.velocityThreshold = i1047[6]
  i1046.maxLinearCorrection = i1047[7]
  i1046.maxAngularCorrection = i1047[8]
  i1046.maxTranslationSpeed = i1047[9]
  i1046.maxRotationSpeed = i1047[10]
  i1046.baumgarteScale = i1047[11]
  i1046.baumgarteTOIScale = i1047[12]
  i1046.timeToSleep = i1047[13]
  i1046.linearSleepTolerance = i1047[14]
  i1046.angularSleepTolerance = i1047[15]
  i1046.defaultContactOffset = i1047[16]
  i1046.autoSimulation = !!i1047[17]
  i1046.queriesHitTriggers = !!i1047[18]
  i1046.queriesStartInColliders = !!i1047[19]
  i1046.callbacksOnDisable = !!i1047[20]
  i1046.reuseCollisionCallbacks = !!i1047[21]
  i1046.autoSyncTransforms = !!i1047[22]
  var i1049 = i1047[23]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1049[i + 0]) );
  }
  i1046.collisionMatrix = i1048
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.layerId = i1053[1]
  i1052.otherLayerId = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1057[i + 0]) );
  }
  i1054.qualityLevels = i1056
  var i1059 = i1055[1]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.names = i1058
  i1054.shadows = i1055[2]
  i1054.anisotropicFiltering = i1055[3]
  i1054.antiAliasing = i1055[4]
  i1054.lodBias = i1055[5]
  i1054.shadowCascades = i1055[6]
  i1054.shadowDistance = i1055[7]
  i1054.shadowmaskMode = i1055[8]
  i1054.shadowProjection = i1055[9]
  i1054.shadowResolution = i1055[10]
  i1054.softParticles = !!i1055[11]
  i1054.softVegetation = !!i1055[12]
  i1054.activeColorSpace = i1055[13]
  i1054.desiredColorSpace = i1055[14]
  i1054.masterTextureLimit = i1055[15]
  i1054.maxQueuedFrames = i1055[16]
  i1054.particleRaycastBudget = i1055[17]
  i1054.pixelLightCount = i1055[18]
  i1054.realtimeReflectionProbes = !!i1055[19]
  i1054.shadowCascade2Split = i1055[20]
  i1054.shadowCascade4Split = new pc.Vec3( i1055[21], i1055[22], i1055[23] )
  i1054.streamingMipmapsActive = !!i1055[24]
  i1054.vSyncCount = i1055[25]
  i1054.asyncUploadBufferSize = i1055[26]
  i1054.asyncUploadTimeSlice = i1055[27]
  i1054.billboardsFaceCameraPosition = !!i1055[28]
  i1054.shadowNearPlaneOffset = i1055[29]
  i1054.streamingMipmapsMemoryBudget = i1055[30]
  i1054.maximumLODLevel = i1055[31]
  i1054.streamingMipmapsAddAllCameras = !!i1055[32]
  i1054.streamingMipmapsMaxLevelReduction = i1055[33]
  i1054.streamingMipmapsRenderersPerFrame = i1055[34]
  i1054.resolutionScalingFixedDPIFactor = i1055[35]
  i1054.streamingMipmapsMaxFileIORequests = i1055[36]
  i1054.currentQualityLevel = i1055[37]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1065 = data
  i1064.weight = i1065[0]
  i1064.vertices = i1065[1]
  i1064.normals = i1065[2]
  i1064.tangents = i1065[3]
  return i1064
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1067 = data
  i1066.xPlacement = i1067[0]
  i1066.yPlacement = i1067[1]
  i1066.xAdvance = i1067[2]
  i1066.yAdvance = i1067[3]
  return i1066
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"enabled":19},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"disableBatching":11,"compiled":12},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"23":[24],"59":[11],"60":[17],"61":[17],"21":[17],"62":[17],"63":[17],"64":[17],"65":[17],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[11],"81":[7],"82":[83],"84":[83],"28":[27],"85":[27],"86":[7,27],"26":[27,32],"87":[27],"88":[32,27],"89":[7],"90":[32,27],"91":[27],"92":[27],"93":[27],"31":[28],"33":[32,27],"94":[27],"30":[28],"95":[27],"96":[27],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[27],"103":[27],"37":[32,27],"104":[27],"105":[27],"106":[27],"107":[27],"108":[32,27],"109":[27],"110":[40],"111":[40],"41":[40],"112":[40],"113":[11],"114":[11]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.TrailRenderer","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.PhysicMaterial","UnityEngine.Light","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","BallController","UnityEngine.GameObject","UnityEngine.SphereCollider","UnityEngine.Rigidbody","BallCheckScore","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.HingeJoint","UnityEngine.CapsuleCollider","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","GameManager","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","TMPro.TMP_FontAsset","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","BallSelectRotate","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Basketball 3";

Deserializers.lunaInitializationTime = "08/13/2025 18:18:51";

Deserializers.lunaDaysRunning = "1.4";

Deserializers.lunaVersion = "6.4.0";

Deserializers.lunaSHA = "6639120529aa36186c6141b5c3fb20246c28bff0";

Deserializers.creativeName = "Test";

Deserializers.lunaAppID = "32199";

Deserializers.projectId = "09c3f673d9d244568b2c082fb6ba654c";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.9\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Basketball-3";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "1b1388de-b27c-4ee8-9fb1-a1adf053f7cd";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

