/*
 applicationPreferences.h

 Created by Tue Topholm on 31/01/11.
 Reused and updated by Raphael Hirtenfelder 17/03/16.
*/
#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface applicationPreferences : CDVPlugin 
{
}

- (void) getSetting:(CDVInvokedUrlCommand*)command;
- (void) setSetting:(CDVInvokedUrlCommand*)command;
- (NSString*) getSettingFromBundle:(NSString*)settingName;

@end