from PIL import Image
import numpy as np

img = Image.open('public/images/logo.png').convert('RGBA')
arr = np.array(img)

# We want to change the text to white. 
# The text is Red ("Kishori") and Dark Blue ("PALACE"), and there's a gold flute.
# Let's turn all Red, Dark Blue, and Gold pixels into White.

R, G, B, A = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]

# 1. Red Mask: R > 150, G < 100, B < 100 (plus edges which might be darker/lighter red)
# A better red mask: R is significantly greater than G and B
red_mask = (R.astype(int) - np.maximum(G, B).astype(int)) > 40

# 2. Dark Blue Mask: B > G and B > R, and overall not too bright
blue_mask = (B.astype(int) - np.maximum(R, G).astype(int)) > 20

# 3. Gold Flute Mask: mostly yellow/orange, and located below row 600
# row > 600 means we avoid the feather's yellow eye
y_coords = np.arange(arr.shape[0])[:, None]
gold_mask = (y_coords > 600) & (R > 150) & (G > 100) & (B < 100)

# Combine masks
replace_mask = red_mask | blue_mask | gold_mask

# To handle anti-aliasing (smooth edges), we can just set any pixel that matches the hue to white.
# However, for semi-transparent edge pixels of the red text, changing them to solid white might look jagged.
# We will preserve their alpha channel but set RGB to 255.
# For edge pixels that have red hue, we also include them if R > G and R > B.
red_edges = (R > G) & (R > B) & (R > 50)
blue_edges = (B > G) & (B > R) & (B > 50) & (R < 100) & (G < 100)
replace_mask = replace_mask | red_edges | blue_edges | gold_mask

# But wait! We might accidentally turn some parts of the feather white? 
# The feather is mostly Green, Teal, Cyan. 
# Green: G > R, G > B
# Cyan: G & B > R
# So as long as we only target R>G (reds/oranges) and B>G (blues), the green feather is safe.
# The feather's blue eye might be B>G. Let's protect the blue eye by restricting blue_edges to y > 600, 
# because "PALACE" is at the bottom (y > 600).
blue_edges = blue_edges & (y_coords > 600)

# Final replacement mask
final_mask = red_edges | blue_edges | gold_mask

arr[final_mask, 0] = 255
arr[final_mask, 1] = 255
arr[final_mask, 2] = 255

out = Image.fromarray(arr)
out.save('public/images/logo-hybrid.png')
print("Processed logo saved to logo-hybrid.png")
