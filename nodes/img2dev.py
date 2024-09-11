import torch
import comfy.sd

current_device = "cuda:0"


def get_torch_device_patched():
    global current_device
    if (
        not torch.cuda.is_available()
        or comfy.model_management.cpu_state == comfy.model_management.CPUState.CPU
    ):
        return torch.device("cpu")

    return torch.device(current_device)
    

class ImageToDevice:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "device": ([f"cuda:{i}" for i in range(torch.cuda.device_count())],),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"
    CATEGORY = "marduk191/image utils"

    def execute(self, image, device):
        image = image.clone().to(device)
        torch.cuda.empty_cache()

        return (image,)
        
NODE_CLASS_MAPPINGS = {
    # Image analysis
    "ImageToDevice": ImageToDevice,
}

NODE_DISPLAY_NAME_MAPPINGS = {
    # Image analysis
    "ImageToDevice": "marduk191's Image Sender",
}