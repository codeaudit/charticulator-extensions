/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SchemaPbiviz {
  /**
   * Version of the IVisual API
   */
  apiVersion?: string;
  /**
   * Information about the author of the visual
   */
  author?: {
    /**
     * Name of the visual author. This is displayed to users.
     */
    name?: string;
    /**
     * E-mail of the visual author. This is displayed to users for support.
     */
    email?: string;
    [k: string]: any;
  };
  /**
   * Assets used by the visual
   */
  assets?: {
    /**
     * A 20x20 png icon used to represent the visual
     */
    icon?: string;
    [k: string]: any;
  };
  /**
   * An array of relative paths to 3rd party javascript libraries to load
   */
  externalJS?: string[];
  /**
   * An array of relative paths to string resources to load
   */
  stringResources?: string[];
  /**
   * Relative path to the stylesheet (less) for the visual
   */
  style?: string;
  /**
   * Relative path to the visual capabilities json file
   */
  capabilities?: string;
  /**
   * Details about this visual
   */
  visual?: {
    /**
     * What does this visual do?
     */
    description?: string;
    /**
     * Internal visual name
     */
    name?: string;
    /**
     * A friendly name
     */
    displayName?: string;
    /**
     * External files (such as JavaScript) that you would like to include
     */
    externals?: any[];
    /**
     * Unique identifier for the visual
     */
    guid?: string;
    /**
     * Class of your IVisual
     */
    visualClassName?: string;
    /**
     * Icon path
     */
    icon?: string;
    /**
     * Visual version
     */
    version?: string;
    /**
     * Url to the github repository for this visual
     */
    gitHubUrl?: string;
    /**
     * Url to the support page for this visual
     */
    supportUrl?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
