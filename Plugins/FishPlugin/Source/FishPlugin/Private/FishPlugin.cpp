// For copyright see LICENSE in EnvironmentProject root dir, or:
//https://github.com/UE4-OceanProject/OceanProject/blob/Master-Environment-Project/LICENSE

#include "FishPlugin.h"

#define LOCTEXT_NAMESPACE "FFishPluginModule"

void FFishPluginModule::StartupModule()
{
	// This code will execute after your module is loaded into memory; the exact timing is specified in the .uplugin file per-module
}

void FFishPluginModule::ShutdownModule()
{
	// This function may be called during shutdown to clean up your module.  For modules that support dynamic reloading,
	// we call this function before unloading the module.
}

#undef LOCTEXT_NAMESPACE
	
IMPLEMENT_MODULE(FFishPluginModule, FishPlugin)