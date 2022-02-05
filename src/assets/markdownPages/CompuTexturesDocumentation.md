# Documentation

# CompuTextures - **V1.0**

---

This Unity Extension will help you create procedural textures exactly how you need it! 

## Get started!

To generate a custom texture, you need to do the following steps:

1. Create a new GameObject with a ‘Noise Generator’ component.
2. Open the ‘Texture Viewer Window’ under CompuTextures>Texture Viewer Window
3. Create a NoiseChannelCollection asset and NoiseAssets
4. Customize!
5. Press the ‘Save Texture’ Button.
    
    ![Get started steps visualized.](/CompuTexturesDocumentation/GetStarted.png)
    
    Get started steps visualized.
    

## Noise Generator *Component*

This component is responsible for creating a noise texture. The Editor is divided into different sections with different tasks.

### Material

You can directly send the generated textures to a material.

![Material properties.](/CompuTexturesDocumentation/Untitled.png)

Material properties.

Select a material and specify the shader keywords for both the 2D and 3D texture.

### Texture Settings

Contains settings for the texture generation. It consists of the following.

Collection Asset - Holds 4 Noise Asset, one for each texture channel (RGBA). This scriptable object allows you to easily load save noise asset configurations 

With the ‘Selected Channel’ option you can select, which texture channel you currently want to edit. You can also choose to view all simultaneously. Each channel can hold a **Noise Asset**.

![Selected Channel options.](/CompuTexturesDocumentation/Untitled%201.png)

Selected Channel options.

Noise Asset - This scriptable object saves settings for generating a noise texture. It can be assigned to a texture channel (RGBA). It consists of multiple **layers,** which each holds a different Noise Setting.

![Untitled](/CompuTexturesDocumentation/Untitled%202.png)

Every Noise Setting consists of the following:

- Filter Type - Specifies the type of noise used (see below).
- Dimension - One / Two / Three dimensional noise.
- Tileable - Specifies, whether the noise should be tileable or not.
- Strength - The strength of the noise, applied as a multiplication.
- Power - The power of the noise, applied as an exponentiation.
- {Type} Noise Settings -  Specific settings for the individual noise types.
    - Number Of Layers - Generate multiple layers of the noise (fractal Brownian Motion).
    
        
        ![Example of fractal Brownian Motion with lacunarity = 2 and persistence = 0.5](/CompuTexturesDocumentation/FBM.png)
        
        Example of fractal Brownian Motion with lacunarity = 2 and persistence = 0.5
        
    - Scale - The scale of the noise.
    - Offset - Offset of the noise.
    - (Lacunarity) - When generating multiple layers, specifies the scale multiplier for each consecutive layer.
    - (Persistence) - When generating multiple layers, specifies the strength multiplier for each consecutive layer.
- Reset Button - Resets all the settings of this object to default values.

When multiple **layers** of noise are present, the first layer (base layer) gets evaluated normally. Then, the next layer gets evaluated and merged with the first, depending on the **overlay type.**

![Untitled](/CompuTexturesDocumentation/Untitled%203.png)

There are 3 different overlay types:

1. Modulate - The value of the current layer gets remapped to [-0.5, 0.5] and added to the value of the previous layer.
    
    ![Modulate Overlay: Right Base and Overlay textures, left applied](/CompuTexturesDocumentation/Overlay.png)
    
    Modulate Overlay: Right Base and Overlay textures, left applied
    
2. Mask - The value of the previous layer noise gets multiplied with the value of this layer.
    
    ![Mask Overlay: Right Base and Overlay textures, left applied](/CompuTexturesDocumentation/Mask.png)
    
    Mask Overlay: Right Base and Overlay textures, left applied
    
3. Add - Adds the two values together.
    
    ![Add Overlay: Right Base and Overlay textures, left applied](/CompuTexturesDocumentation/Add.png)
    
    Add Overlay: Right Base and Overlay textures, left applied
    

Types of Noise:

1. White Noise
    
    ![Base2.png](/CompuTexturesDocumentation/Base2.png)
    
2. Value Noise
    
    ![Base1.png](/CompuTexturesDocumentation/Base1.png)
    
3. Perlin Noise
    
    ![Perlin.png](/CompuTexturesDocumentation/Perlin.png)
    
4. Worley Noise
    
    ![Worley.png](/CompuTexturesDocumentation/Worley.png)
    
5. Voronoi Noise
    
    ![Voronoi.png](/CompuTexturesDocumentation/Voronoi.png)
    

### Post Processing

These settings are responsible for post processing effects.

![Post Processing effect settings.](/CompuTexturesDocumentation/Untitled%204.png)

Post Processing effect settings.

- Type - Type of Post Processing that gets applied (see below).
- Selected Channels - Select, which texture channel this effect affects.
- Selected Layers - Select, after which noise layer the effect gets applied.
    
    ![Selected Layers and Selected Chanel example.](/CompuTexturesDocumentation/Artboard_1.png)
    
    Selected Layers and Selected Chanel example.
    
    For example: The Isoline Effects given above will **only** affect the second layer of the red channel.
    
- After All Evaluation - Specifies, if the effect should be applied again after all the noise layers have been evaluated.
- {Type} Settings - Specific settings for the individual post processing types.
- Reset Button - Resets all the settings of this object to default values.

Types of Post Processing:

1. **Cosine**
    
    Returns the cosine of the current texel value multiplied with a given scale and added a given offset.
    
    `return cos(value * scale + offset);`
    
    ![Cosine Post Processing: Left without, right applied.](/CompuTexturesDocumentation/Cosine.png)
    
    Cosine Post Processing: Left without, right applied.
    
2. **Isolines**
    
    Returns the fracture of the current texel value multiplied with a given range.
    
    `frac(value * range);`
    
    ![Isolines Post Processing: Left without, right applied.](/CompuTexturesDocumentation/Isoline.png)
    
    Isolines Post Processing: Left without, right applied.
    
3. **Color**
    
    Remaps the grayscale image to a specified color ramp.
    
    ![Color Post Processing: Left without, right applied.](/CompuTexturesDocumentation/Color.png)
    
    Color Post Processing: Left without, right applied.
    

### Buttons

- Clear Render Texture - If there are any errors in the console, press this button!
- Generate - Generates the texture.
- Save Texture - Saves the texture either as a png (2D) or as an asset (3D).
    - Bake to different color channels - you can specify, if the the different color channels should be baked, or just the selected one as an RGBA image.

---

## Texture Viewer *Window*

With the help of this window, you can quickly preview the texture you are creating. Can be found under CompuTextures>Texture Viewer Window.

![Unity Editor Window](/CompuTexturesDocumentation/Untitled%205.png)

Unity Editor Window

- Selected (Dropdown) - The object who provides the texture shown in the window. The dropdown reveals all the current texture providers in the current scene.
- RBGA - Select which texture channels of the textures are displayed.
- View tiled - Toggle, which makes the window draw the texture in a 2x2 grid

---