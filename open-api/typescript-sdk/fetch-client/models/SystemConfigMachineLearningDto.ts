/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CLIPConfig } from './CLIPConfig';
import {
    CLIPConfigFromJSON,
    CLIPConfigFromJSONTyped,
    CLIPConfigToJSON,
} from './CLIPConfig';
import type { RecognitionConfig } from './RecognitionConfig';
import {
    RecognitionConfigFromJSON,
    RecognitionConfigFromJSONTyped,
    RecognitionConfigToJSON,
} from './RecognitionConfig';

/**
 * 
 * @export
 * @interface SystemConfigMachineLearningDto
 */
export interface SystemConfigMachineLearningDto {
    /**
     * 
     * @type {CLIPConfig}
     * @memberof SystemConfigMachineLearningDto
     */
    clip: CLIPConfig;
    /**
     * 
     * @type {boolean}
     * @memberof SystemConfigMachineLearningDto
     */
    enabled: boolean;
    /**
     * 
     * @type {RecognitionConfig}
     * @memberof SystemConfigMachineLearningDto
     */
    facialRecognition: RecognitionConfig;
    /**
     * 
     * @type {string}
     * @memberof SystemConfigMachineLearningDto
     */
    url: string;
}

/**
 * Check if a given object implements the SystemConfigMachineLearningDto interface.
 */
export function instanceOfSystemConfigMachineLearningDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clip" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "facialRecognition" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function SystemConfigMachineLearningDtoFromJSON(json: any): SystemConfigMachineLearningDto {
    return SystemConfigMachineLearningDtoFromJSONTyped(json, false);
}

export function SystemConfigMachineLearningDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemConfigMachineLearningDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clip': CLIPConfigFromJSON(json['clip']),
        'enabled': json['enabled'],
        'facialRecognition': RecognitionConfigFromJSON(json['facialRecognition']),
        'url': json['url'],
    };
}

export function SystemConfigMachineLearningDtoToJSON(value?: SystemConfigMachineLearningDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clip': CLIPConfigToJSON(value.clip),
        'enabled': value.enabled,
        'facialRecognition': RecognitionConfigToJSON(value.facialRecognition),
        'url': value.url,
    };
}
